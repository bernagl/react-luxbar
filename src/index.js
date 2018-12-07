import React from 'react'
import PropTypes from 'prop-types'

const NavbarContext = React.createContext()

const NavbarConsumer = props => {
  class Hover extends React.Component {
    state = { hover: false }

    toggleHover = hover => this.setState({ hover })

    opts = () => ({ toggleHover: this.toggleHover, hover: this.state.hover })

    render() {
      return (
        <NavbarContext.Consumer {...props}>
          {context => {
            if (!context)
              throw new Error(
                'Navbar compound components cannot be rendered outside the Navbar component'
              )
            return props.children({ ...context, ...this.opts() })
          }}
        </NavbarContext.Consumer>
      )
    }
  }

  return <Hover />
}

class Navbar extends React.Component {
  state = { on: false, positions: ['fixed', 'fixedBottom', 'static'] }

  static defaultProps = {
    backgroundColor: '#00dbe7',
    color: 'white',
    className: '',
    hoverColor: '#00dbe7',
    position: 'fixed',
    onToggle: on => console.log(`toggle to: ${on ? 'on' : 'off'}`),
    rtl: true
  }

  static Logo = ({ className, children }) => (
    <NavbarConsumer>
      {({ rtl, toggle }) => (
        <li
          className={`luxbar-header ${rtl ? 'rtl' : 'ltr'} ${className || ''}`}
        >
          <span className="luxbar-brand">{children}</span>
          <label
            className="luxbar-hamburger luxbar-hamburger-doublespin"
            id="luxbar-hamburger"
            htmlFor="luxbar-checkbox"
            onClick={toggle}
          >
            <span />
          </label>
        </li>
      )}
    </NavbarConsumer>
  )

  static Option = ({ className, children }) => (
    <NavbarConsumer>
      {({ hover, hoverColor, rtl, toggle, toggleHover }) => (
        <li
          className={`luxbar-item ${rtl ? 'rtl' : 'ltr'} ${className} ${hover ? 'hover' : ''}`}
          style={
            hover ? { backgroundColor: hoverColor } : null
          }
          onClick={toggle}
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
        >
          {children}
        </li>
      )}
    </NavbarConsumer>
  )

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    )

  options = () => ({
    on: this.state.on,
    error: this.error,
    hoverColor: this.props.hoverColor,
    rtl: this.props.rtl,
    toggle: this.toggle
  })

  render() {
    const { on, positions } = this.state
    const { backgroundColor, className, color, position, rtl } = this.props
    const pos = positions.includes(position) ? position : 'fixed'
    return (
      <NavbarContext.Provider value={this.options()}>
        <header id="luxbar" className={`luxbar-${pos}`}>
          <input
            type="checkbox"
            className="luxbar-checkbox"
            id="luxbar-checkbox"
            checked={on}
            onChange={() => null}
          />
          <div
            className={`luxbar-menu luxbar-menu-right luxbar-menu-material-cyan ${className}`}
            style={{ backgroundColor, color }}
          >
            <ul className={`luxbar-navigation ${rtl ? 'rtl' : 'ltr'}`}>
              {this.props.children}
            </ul>
          </div>
        </header>
      </NavbarContext.Provider>
    )
  }
}

Navbar.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  onToggle: PropTypes.func,
  position: PropTypes.oneOf(['fixed', 'fixedBottom', 'static']),
  rtl: PropTypes.bool
}

export default Navbar

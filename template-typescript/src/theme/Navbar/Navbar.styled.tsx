import styled from '../../styled'
import { Container, Left, Right } from '../SplitContainer'

const NavbarContainer = styled(Container)`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 3;
`

const NavbarLeft = styled(Left)``

const NavbarRight = styled(Right)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 100%;
    text-align: right;
    margin: 0;
    padding: 0 16px;
    list-style-type: none;
    li {
      padding: 16px 16px;
      display: inline-block;
      font-size: 24px;
      cursor: pointer;
    }
  }
`

export { NavbarContainer, NavbarLeft, NavbarRight }
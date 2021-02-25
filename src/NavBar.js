
import { Menu } from 'semantic-ui-react'
function NavBar () {

return (


<div>
<Menu fluid widths = {5}>

<Menu.Item
          name='profile'
      
        >
          Profile
        </Menu.Item>

        <Menu.Item
          name='FindAHang'
      
        >
          Find-a-Hang
        </Menu.Item>

        <Menu.Item
          name='myHangs'

        >
          My Hangs
        </Menu.Item>

        <Menu.Item
          name='karma'

        >
          Karma
        </Menu.Item>
      </Menu>
</div>
)
}

export default NavBar
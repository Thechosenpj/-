import Vue from 'vue';
import { 
  Button, 
  Select,
  Icon,
  Row,
  Col,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog
} from 'element-ui'
const element = {
  install : () => {
    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Icon)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Dialog)
  }
}

export default element

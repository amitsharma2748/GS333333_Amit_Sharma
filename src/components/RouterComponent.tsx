
import SideNavHeaderComponent from './SideNavHeaderComponent'
import { Route, Routes } from 'react-router-dom'
import IndexStore from '../modules/store/IndexStore'
import PageNotFound from './PageNotFound'
import { paths } from '../utils/path'
import IndexSku from '../modules/sku/IndexSku'
import IndexPlanning from '../modules/planning/IndexPlanning'

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<SideNavHeaderComponent />} >
        <Route path={paths.store} element={<IndexStore/>}/>
        <Route path={paths.sku} element={<IndexSku/>}/>
        <Route path={paths.planning} element={<IndexPlanning/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
      {/* <SideNavHeaderComponent/> */}
    </Routes>
  )
}

export default RouterComponent
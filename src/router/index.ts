import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

// type RouteComponent = () => Promise<typeof import("*.vue")>;

interface RoutesDirectionsStructure {
  id: number;
  name: string;
  tab: () => Promise<typeof import("*.vue")>;
}

// interface RoutesDeclarationObject {
//   [key: string]: RoutesDirectionsStructure
// }

const tab1 = () => import (/* webpackChunkName: 'tab1' */ '../views/Tab1.vue')
const tab2 = () => import (/* webpackChunkName: 'tab2' */ '../views/Tab2.vue')
const tab3 = () => import (/* webpackChunkName: 'tab3' */ '../views/Tab3.vue')
const tab4 = () => import (/* webpackChunkName: 'tab4' */ '../views/Tab4.vue')

const tabs: RoutesDirectionsStructure[] = [
  { id: 1, name: 'Tab1', tab: tab1 },
  { id: 2, name: 'Tab2', tab: tab2 },
  { id: 3, name: 'Tab3', tab: tab3 },
  { id: 4, name: 'Tab4', tab: tab4 },
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [ { path: '',redirect: '/tabs/tab1' } ]
  }
]



async function pushRouteDirection(route: any) {
  tabs.map((direction: any) => {
    route.push({
      path: direction.name,
      name: direction.name,
      component: direction.tab
    });
  })
}

routes.map(async (route: any) => {
  console.log(route)
  if (route.children === undefined) return
  else return await pushRouteDirection(route.children)
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

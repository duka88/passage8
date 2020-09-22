import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _151cb464 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages_about-us" */))
const _4a2d39b0 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _5ec0f660 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _d154612e = () => interopDefault(import('..\\pages\\content-marketing-services.vue' /* webpackChunkName: "pages_content-marketing-services" */))
const _75e3c8e8 = () => interopDefault(import('..\\pages\\graphic-design-services.vue' /* webpackChunkName: "pages_graphic-design-services" */))
const _0c11430c = () => interopDefault(import('..\\pages\\it-maintenance-services.vue' /* webpackChunkName: "pages_it-maintenance-services" */))
const _1f2e4b7e = () => interopDefault(import('..\\pages\\ppc-management-services.vue' /* webpackChunkName: "pages_ppc-management-services" */))
const _1e0be4be = () => interopDefault(import('..\\pages\\seo-services.vue' /* webpackChunkName: "pages_seo-services" */))
const _0d2f0a4e = () => interopDefault(import('..\\pages\\social-media-marketing-services.vue' /* webpackChunkName: "pages_social-media-marketing-services" */))
const _3f92060e = () => interopDefault(import('..\\pages\\web-development-services.vue' /* webpackChunkName: "pages_web-development-services" */))
const _dcc4a0aa = () => interopDefault(import('..\\pages\\white-label-services.vue' /* webpackChunkName: "pages_white-label-services" */))
const _4f3af71a = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages_blog__slug_index" */))
const _02c71c12 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _151cb464,
    name: "about-us"
  }, {
    path: "/blog",
    component: _4a2d39b0,
    name: "blog"
  }, {
    path: "/contact",
    component: _5ec0f660,
    name: "contact"
  }, {
    path: "/content-marketing-services",
    component: _d154612e,
    name: "content-marketing-services"
  }, {
    path: "/graphic-design-services",
    component: _75e3c8e8,
    name: "graphic-design-services"
  }, {
    path: "/it-maintenance-services",
    component: _0c11430c,
    name: "it-maintenance-services"
  }, {
    path: "/ppc-management-services",
    component: _1f2e4b7e,
    name: "ppc-management-services"
  }, {
    path: "/seo-services",
    component: _1e0be4be,
    name: "seo-services"
  }, {
    path: "/social-media-marketing-services",
    component: _0d2f0a4e,
    name: "social-media-marketing-services"
  }, {
    path: "/web-development-services",
    component: _3f92060e,
    name: "web-development-services"
  }, {
    path: "/white-label-services",
    component: _dcc4a0aa,
    name: "white-label-services"
  }, {
    path: "/blog/:slug",
    component: _4f3af71a,
    name: "blog-slug"
  }, {
    path: "/",
    component: _02c71c12,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

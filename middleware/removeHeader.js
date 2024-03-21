export default function ({ route, redirect }) {
    if (route.path === '/login') {
      return redirect('/login', { layout: 'empty' })
    }
  }
function a(s) {
	console.log({name: s.slice(s.indexOf('[')+1, s.indexOf(']')-1), url: s.slice(s.indexOf(']')+2, s.indexOf(')')-1), intro: s.slice(s.indexOf('|')+1)})
}

a('[Frozen UI](http://frozenui.github.io/) | 腾讯出品的前端组件库')
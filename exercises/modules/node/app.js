const {api}  = require('./api')

App = App || {}
App.showPostsForCurrentUser = (userId, cb) => {
  App.getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

App.showUserProfile = (userId, cb) => {
  App.getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user)
  })
}



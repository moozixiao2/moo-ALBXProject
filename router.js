const express = require('express');
//引入控制器
const pagesController = require('./controller/pagesController');
const userController = require('./controller/userController');
const postsController = require('./controller/postsController');
const cateController = require('./controller/cateController');
const optionsController = require('./controller/optionsController');
const commentsController = require('./controller/commentsController');
const uploadController = require('./controller/uploadController');
//路由
const router = express.Router();

//前台
router
    .get('/', pagesController.getIndexPage)
    .get('/detail', pagesController.getDetailPage)
    .get('/list', pagesController.getListPage)
    //后台
    .get('/admin', pagesController.getAdminIndexPage)
    .get('/admin/login', pagesController.getAdminLoginPage)
    .get('/admin/categories', pagesController.getAdminCategoriesPage)
    .get('/admin/comments', pagesController.getAdminCommentsPage)
    .get('/admin/nav-menus', pagesController.getAdminNavMenusPage)
    .get('/admin/password-reset', pagesController.getAdminPasswordResetPage)
    .get('/admin/post-add', pagesController.getAdminPostAddPage)
    .get('/admin/posts', pagesController.getAdminPostsPage)
    .get('/admin/profile', pagesController.getAdminProfilePage)
    .get('/admin/settings', pagesController.getAdminSettingsPage)
    .get('/admin/slides', pagesController.getAdminSlidesPage)
    .get('/admin/users', pagesController.getAdminUsersPage)
    //业务逻辑
    .post('/login', userController.login)

    .get('/getAllPosts', postsController.getAllPosts)
    .post('/addPost', postsController.addPost)
    .get('/checkSlugInPost', postsController.checkSlugInPost)
    .get('/getPostById', postsController.getPostById)
    .post('/editPost', postsController.editPost)
    .get('/delPostById', postsController.delPostById)

    .get('/getAllCategories', cateController.getAllCategories)
    .post('/addCate', cateController.addCate)
    .post('/editCateById', cateController.editCateById)
    .get('/delCateById', cateController.delCateById)

    .get('/getNavMenus', optionsController.getNavMenus)
    .post('/addNavMenus', optionsController.addNavMenus)
    .get('/delNavMenu', optionsController.delNavMenu)
    .get('/getAllOptions', optionsController.getAllOptions)
    .post('/updateOptions', optionsController.updateOptions)
    .get('/getSlides', optionsController.getSlides)
    .post('/addSlides', optionsController.addSlides)
    .get('/delSlides', optionsController.delSlides)

    .get('/getAllUsers', userController.getAllUsers)
    .get('/getUserEmail', userController.getUserEmail)
    .get('/getUserSlug', userController.getUserSlug)
    .post('/addUser', userController.addUser)
    .post('/editUser', userController.editUser)
    .get('/delUserById', userController.delUserById)

    .get('/getCurrentUserByEmail', userController.getCurrentUserByEmail)
    .get('/getCurrentUserSlug', userController.getCurrentUserSlug)
    .post('/editCurrentUserByEmail', userController.editCurrentUserByEmail)
    .get('/getCurrentUserPwd', userController.getCurrentUserPwd)
    //注销（退出），即销毁session
    .get('/exit', userController.exit)

    .get('/getAllComments', commentsController.getAllComments)
    .get('/editComStatusAgreeById', commentsController.editComStatusAgreeById)
    .get('/editComStatusRefuceById', commentsController.editComStatusRefuceById)
    .get('/delCommentsStatusById', commentsController.delCommentsStatusById)

    .post('/uploadFile', uploadController.uploadFile)
//暴露
module.exports = router;
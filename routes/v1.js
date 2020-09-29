const express 		= require('express');
const router 		  = express.Router();
// const mdlw        = require('../middleware/routeauth.mdlw.js');

// const { 
// 	UserCtrl, 
// 	PostCtrl, 
// 	CommentCtrl, 
// 	LibraryCtrl, 
// 	BookCtrl,
// 	CommunityCtrl,
// 	TransactionCtrl,
// 	SurveyCtrl,
// 	NotificationCtrl,
// 	MessageCtrl
// } = require('../controllers/index.controller');

const path          = require('path');



/* GET home page. */
router.get('/ping', function(req, res, next) {
  res.json({status:"success", message:"pong", data:{"version_number":"v1.0.0"}})
});

// /* User */
// router.post('/user/cr', UserCtrl.create);
// router.post('/user/login', UserCtrl.login);
// router.post('/user/loginGgl', UserCtrl.loginGoogleWeb);
// router.post('/user/loginFb', UserCtrl.loginFacebookWeb);

// /* single file upload s3 */
// router.post('/post/upld_sing',PostCtrl.uploadSingleFile);

// /* home page */
// router.post('/book/hm', BookCtrl.getBooksDetail);

// router.use(mdlw.accessToken);
// /* User */
// router.post('/user/gtPrf', UserCtrl.getprofile);
// router.post('/user/edPrf', UserCtrl.editProfile);
// router.post('/user/follow', UserCtrl.follow);
// router.post('/user/unfollow', UserCtrl.unfollow);


// /* User-Post */
// router.post('/post/cr', PostCtrl.create);
// router.post('/post/rdAll', PostCtrl.readAll);
// router.post('/post/ed', PostCtrl.edit);
// router.post('/post/dl', PostCtrl.deletePost);
// router.post('/post/acmt', PostCtrl.allowComment);
// router.post('/post/dcmt', PostCtrl.disAllowComment);
// router.post('/post/vt', PostCtrl.vote);

// /* Topics */
// router.post('/topic/rd', PostCtrl.getTrendingTopics);

// /* User-Post-Comment */
// router.post('/comment/rd', CommentCtrl.read);
// router.post('/comment/cr', CommentCtrl.create);
// router.post('/comment/dl', CommentCtrl.deleteCmt);


// /* Library */
// router.post('/lib/ad_t_lib', LibraryCtrl.addToUserLibrary);
// router.post('/lib/rm_f_lib', LibraryCtrl.removeFromUserLibrary);
// router.post('/lib/brb', LibraryCtrl.bookRequestBucket);
// router.post('/lib/req_ex', LibraryCtrl.bookRequestExchange);
// router.post('/lib/crl', LibraryCtrl.communityRequestLog);
// router.post('/lib/req_cnfm', LibraryCtrl.bookConfirmExchange);
// router.post('/lib/mrl', LibraryCtrl.myRequestLog);
// router.post('/lib/cmrl', LibraryCtrl.cancelMyRequestLog);
// router.post('/lib/ex_bks', LibraryCtrl.exchangedBooks);
// router.post('/lib/lend_bks', LibraryCtrl.lendedBooks);
// router.post('/lib/rnt_bks', LibraryCtrl.rentedBooks);
// router.post('/lib/in_stck', LibraryCtrl.inStockBooks);
// router.post('/lib/ot_stck', LibraryCtrl.outStockBooks);
// router.post('/lib/usr_subs', LibraryCtrl.checkUserSubscription);

// /* Book */
// router.post('/book/gbks', BookCtrl.getBooksDetail);
// router.post('/book/gbks_ba', BookCtrl.getBooksByAuthor); //get book by author
// router.post('/book/gbks_bg', BookCtrl.getBooksByGenres); //get book by genres
// // router.post('/book/plst', BookCtrl.getProductListing); //product listing

// /* Notification And Messages */
// router.post('/n/gt', UserCtrl.getNotifications); //get notifications
// router.post('/n/rd', UserCtrl.readNotifications); //read notifications

// /* Community - notes */
// router.post('/comm/add_nt', CommunityCtrl.addNote);
// router.get('/comm/rd_nt', CommunityCtrl.readNote);
// router.post('/comm/rm_nt', CommunityCtrl.deleteNote);

// /* Community - event */
// router.post('/comm/ad_evt', CommunityCtrl.addEvent);
// router.post('/comm/src_usr_em', CommunityCtrl.searchUserByEmail);
// router.get('/comm/rd_evt', CommunityCtrl.readEvent);
// // router.get('/comm/ed_evt', CommunityCtrl.editEvent);
// router.post('/comm/rm_evt', CommunityCtrl.deleteEvent);

// /* Community - buzz */
// router.post('/comm/ad_bz', CommunityCtrl.addBuzz);
// router.get('/comm/rd_al_bz', CommunityCtrl.readAllBuzz);
// router.post('/comm/rm_bz', CommunityCtrl.deleteBuzz);

// /* Coins Donation & Conversion */
// router.post('/comm/gv_cn', CommunityCtrl.giveCoin);
// router.post('/comm/gt_cn', CommunityCtrl.getUserCoin);

// /* Survey */
// router.post('/surv/gt_surv', SurveyCtrl.getSurvey);
// router.post('/surv/sb_surv', SurveyCtrl.submitSurvey);
// router.post('/surv/usr_srvy', SurveyCtrl.userSurvey);

// /* Transaction */
// router.post('/trxn/i_trxn', TransactionCtrl.initiateTransaction);

// /* Messaging */
// router.post('/msg/send', MessageCtrl.sendMessage);
// router.post('/msg/get_msg', MessageCtrl.getMessages);
// router.post('/msg/rd_msg', MessageCtrl.readMessages);
// router.post('/msg/get_con_urs', MessageCtrl.getConnectionUsers);

module.exports = router;
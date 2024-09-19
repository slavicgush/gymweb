import { Router } from "express";
import { ensureLoggedIn } from 'connect-ensure-login';
import { homePage,portfolioPage,loginPage,blogsPage, shopPage } from "./controller.js"

const router = Router();

router.get('/',homePage);
router.get('/portfolio',portfolioPage);
router.get('/login',loginPage);
router.get('/blogs',blogsPage);
router.get('/shop',ensureLoggedIn('/gym/login'),shopPage);

export { router };
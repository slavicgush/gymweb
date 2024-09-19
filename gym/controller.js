import { dirname } from 'path';
import { fileURLToPath } from 'url';

import{ getDeadHang,getSocialIcons,getProfilePic,getBegginer,getIntermediate,getAdvanced,getPrograms,getOrderIcon,getLogo } from './model.js';

export async function homePage(request,response){
  const logo = await getLogo();
  const  deadhang = await getDeadHang();
  const  sicon = await getSocialIcons();
  const  beginner = await getBegginer();
  const  intermediate = await getIntermediate();
  const  advanced = await getAdvanced();
  response.render(`index`,{ logo:logo,deadhang:deadhang,sicon:sicon,beginner:beginner,intermediate:intermediate,advanced:advanced });
}
export async function portfolioPage(request,response){
  const profilePic = await getProfilePic();
  response.render(`portfolio`,{ profilePic:profilePic });
}
export async function shopPage(request,response){
  const ordericon  = await getOrderIcon();
  const items = await getPrograms();
  response.render(`shop`,{ items:items,ordericon:ordericon });
}
export async function loginPage(request,response){
  response.render(`login`,{ });
}
export async function blogsPage(request,response){
  response.render(`blog`,{ });
}
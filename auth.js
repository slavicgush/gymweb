import passport from 'passport';
import expressSession from 'express-session';
import LocalStrategy from 'passport-local';
import { getUser,createUser,createMailer } from './gym/model.js';

export default function (app) {
  passport.serializeUser((user, done) => {
    if (user && user.length > 0) {
      done(null, user[0].id);
    } else {
      done('Wrong username or password');
    }
  });
passport.deserializeUser(async(id, done) => {
  const users = await getUser({ id });
  if (!users || users.length === 0) {
    done('User not found');
  } else {
    done(null, users[0]);
  }
});
passport.use(
new LocalStrategy(async(username, password, done) => {
const user = await getUser({username,password});
if(!user){
  done(null,false);
}else{
  done(null,user);
}
}),
);
app.use(
expressSession({
secret: 'top secret',
resave: false,
saveUninitialized: false,
}),
);
app.use(passport.initialize());
app.use(passport.session());
app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
  // Handle successful login
  res.redirect('/gym/shop');
});

  app.post('/createaccount', async (req, res) => {
    const formType = req.body.formType;
    if (formType === 'createAccount') {
        const newUsername = req.body.newUsername;
        const newPassword = req.body.newPassword;
        const newEmail = req.body.newEmail;
        try{
        await createUser({ username: newUsername, password: newPassword,email: newEmail });
        res.redirect('gym/login');
        }catch (error) {
          console.error('Error creating account:', error);
          res.status(500).send('Internal Server Error');
        }
       } else {
      res.status(400).send('Bad Request');
    }
});

app.post('/mailingAccount', async (req, res) => {
  const formType = req.body.formType;
  if (formType === 'mailAccount') {
      const email = req.body.email;
      try {
        await createMailer({ email: email });
        res.redirect('/gym'); 
      } catch (error) {
        console.error('Error creating mailer:', error);
        res.status(500).send('Internal Server Error');
      }
    } else {
      res.status(400).send('Bad Request');
    }
  });

  app.get('/logout', (request, response) => {
    request.logout((err) => {
      if(err){
        console.error(err)
      }
      response.redirect('/');
    });
    });
  }
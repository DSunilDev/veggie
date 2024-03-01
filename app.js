//Package Declaration

const express=require('express')
const path=require('path')
const multer=require('multer') //File upload
const mongodb=require('mongodb') // Mongo pacakge

const app=express()

//Database Folder yet to be called here (MongoDb Atlas
const db=require('./DATABASE/database');


//Ejs Files Path
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

//Static Folder
app.use(express.static('styles'))
app.use(express.static('Images'))
app.use(express.static('blooming onion'))
app.use(express.static('Onion bhaji'))
app.use(express.static('onion kulambu'))
app.use(express.static('onion salan'))
app.use(express.static('onionchutney'))
app.use(express.static('aloo partha'))
app.use(express.static('aloo gobi'))
app.use(express.static('aloo matar'))
app.use(express.static('dum aloo'))
app.use(express.static('potato soup'))
app.use(express.static('aloobhindi'))
app.use(express.static('bhindi fry'))
app.use(express.static('bhindiraita'))
app.use(express.static('peanuytmasala'))
app.use(express.static('pyazbhindi'))
app.use(express.static('crispy bhindi masala'))
app.use(express.static('logos'))




//Routers
app.get('/',function(req,res){
    res.render('index')
})

app.get('/Admin',function(req,res){
    res.render('admin')
})

app.get('/Login',function(req,res){
    res.render('login')
})

app.get('/Signup',function(req,res){
    res.render('signup')
})

app.get('/Veggie',function(req,res){
    res.render('ByVeggie')
})
app.get('/beetrootRecipes',function(req,res){
    res.render('beetroot')
})


app.get('/carrotRecipes',function(req,res){
    res.render('carrot')
})

app.get('/carrotdish',function(req,res){
    res.render('ccarrotrice')
})

app.get('/carrotpartha',function(req,res){
    res.render('ccpartha')
})

app.get('/carrotcurry',function(req,res){
    res.render('ccurry')
})

app.get('/lentilsoup',function(req,res){
    res.render('clentil')
})

app.get('/carrotfry',function(req,res){
    res.render('carrotfry')
})

app.get('/pickelcarrot',function(req,res){
    res.render('carrotpickel')
})

app.get('/cabbageRecipes',function(req,res){
    res.render('cabbage')
})

app.get('/brinjalRecipes',function(req,res){
    res.render('brinjal')
})

app.get('/CauliflowerRecipes',function(req,res){
    res.render('cauli')
})

app.get('/OnionRecipes',function(req,res){
    res.render('OnionRecipes')
})

app.get('/onlotusonion',function(req,res){
    res.render('onlotus')
})

app.get('/ononionpakoda',function(req,res){
    res.render('ononionpakoda')
})
app.get('/ononionkulambu',function(req,res){
    res.render('ononionkulambu')
})

app.get('/ononionsalan',function(req,res){
    res.render('ononionsalan')
})
app.get('/ononionchutney',function(req,res){
    res.render('ononionchutney')
})


app.get('/pumpkinrecipes',function(req,res){
    res.render('pumpkin')
})

app.get('/Ladyfingerrecipes',function(req,res){
    res.render('ladysfinger')
})

app.get('/AlooBhindi',function(req,res){
    res.render('ldaloobhindi')
})

app.get('/pyazBhindi',function(req,res){
    res.render('ldpyaz')
})

app.get('/peanut',function(req,res){
    res.render('ldpeanut')
})

app.get('/bhindifry',function(req,res){
    res.render('ldfry')
})


app.get('/bhindiraita',function(req,res){
    res.render('ldraita')
})

app.get('/crispybhindi',function(req,res){
    res.render('ldcrisp')
})


app.get('/Potato',function(req,res){
    res.render('Potato')
})

app.get('/tomatorecipes',function(req,res){
    res.render('tomato')
})

app.get('/peansrecipes',function(req,res){
    res.render('peans')
})

app.get('/shallotsrecipes',function(req,res){
    res.render('shallots')
})

//User Adding Recipe

app.get('/useraddrecipe',function(req,res){
    res.render('useraddrecipe')
})

app.listen(1000)


// karthi
// sakthikala1974


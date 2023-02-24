
//Render the home page HTML
exports.index = (req, res)=>{
    res.render('index');
};

//Render the about HTML
exports.about = (req, res)=>{
    res.render('about');
};

//Render the contact HTML
exports.contact = (req, res)=>{
    res.render('contact');
};
let heroes ;

const moreHeroes = [
   {'name' : 'Cyclops', 'twitter' : '@oneye', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0005.gif','following':0},
   {'name' : 'Storm', 'twitter' : '@rainsitpours', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0007.gif','following':0},
   {'name' : 'Phoenix', 'twitter' : '@jeangrey', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0016.gif','following':0}
];



fetch('https://my.api.mockaroo.com/hero.json?key=aec31a90&qty=3')
.then (function(response){
  return response.json();
})
.then(function(myJson){
  heroes=myJson;
  render();
});

function render(){
  const htmlSnippet = heroes.map((hero,idx) => `
  <article id=article_${idx} class="dt w-100 bb b--black-05 pb2 mt2"  href="#0">
    <div class="dtc w2 w3-ns v-mid">
      <img src="${hero.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
    </div>
    <div class="dtc v-mid pl3">
      <h1 id="name"class="f6 f5-ns fw6 lh-title black mv0">${hero.name}</h1>
      <h2 class="unique f6 fw4 mt0 mb0 black-60">${hero.twitter}</h2>
    </div>
    <div class="dtc v-mid">
      <div class="w-100 tr">
        <button data-idx="${idx}" class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60">${ hero.following ?  "- Following" : "+Follow"}</button>
      </div>
    </div>
  </article>
`).join('');

   
  const main = document.querySelector("main");
  main.innerHTML = htmlSnippet;
}


/*<article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
    <div class="dtc w2 w3-ns v-mid">
      <img src="${hero.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
    </div>
    <div class="dtc v-mid pl3">
      <h1 class="f6 f5-ns fw6 lh-title black mv0">${hero.name}</h1>
      <h2 class="f6 fw4 mt0 mb0 black-60">${hero.twitter}</h2>
    </div>
    <div class="dtc v-mid">
      <form class="w-100 tr">
      <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
      </form>
    </div>
  </article>
  */

  // const htmlSnippet = heroes.map (hero => '<article class="dt w-100 bb b--black-05 pb2 mt2" href="#0"><div class="dtc w2 w3-ns v-mid"><img src="${hero.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/></div><div class="dtc v-mid pl3"><h1 class="f6 f5-ns fw6 lh-title black mv0">${hero.name}</h1><h2 class="f6 fw4 mt0 mb0 black-60">${hero.twitter}</h2></div><div class="dtc v-mid"><form class="w-100 tr"><button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button></form></div></article>').json("");



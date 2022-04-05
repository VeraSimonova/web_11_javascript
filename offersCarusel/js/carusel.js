/*function init(selectorID){
				caruselElement = document.querySelector(selectorID);
				if (caruselElement === null) {
					console.log("Еrror");
					return 0;
				}
				let carusel = {
					btnPrev: document.querySelector(".prev"),
					btnNext: document.querySelector(".next"),
					listOffersWrap: document.querySelector(".list_offers"),
					offset: 0,
					countItem: function(){
						return this.listOffersWrap.children.length;
					},					
					heightElement: 127,
					heightAllOffers: function(){
						return this.countItem() * this.heightElement;
					},
					offsetPrev: function(){
						let app = this;
						this.btnPrev.addEventListener('click', (evt)=>{
							if(app.offset > -(app.heightAllOffers() - app.heightElement * 5) ){
								console.log(1);
								app.offset = app.offset - app.heightElement;
								app.listOffersWrap.style.marginTop = app.offset+"px";
							}
						});
					},
					offsetNext: function(){
						let app = this;
						this.btnNext.addEventListener('click', (evt)=>{
							if (app.offset != 0) {
								app.offset = app.offset + app.heightElement;
								app.listOffersWrap.style.marginTop = app.offset+"px";
							}
						});
					}
				}
				carusel.offsetPrev();
				carusel.offsetNext();
			}*/

	let caruselOffers = [
		{
			position: "Требуется front-end разработчик",
			money: 100000,
			city: "Нижний Новогород",
			logo_company: "mac.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется back-end разработчик",
			money: 200000,
			city: "Нижний Новогород",
			logo_company: "Burger.svg.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется верастальщик сайтов",
			money: 100000,
			city: "Нижний Новогород",
			logo_company: "logo3.jpeg",
			skills: "",
			content: ""
		},
		{
			position: "Требуется front-end разработчик",
			money: 100000,
			city: "Москва",
			logo_company: "apple.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется back-end разработчик",
			money: 200000,
			city: "Москва",
			logo_company: "cisco.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется верастальщик сайтов",
			money: 100000,
			city: "Москва",
			logo_company: "instagram.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется front-end разработчик",
			money: 100000,
			city: "Нижний Новогород",
			logo_company: "mac.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется back-end разработчик",
			money: 200000,
			city: "Нижний Новогород",
			logo_company: "Burger.svg.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется верастальщик сайтов",
			money: 100000,
			city: "Нижний Новогород",
			logo_company: "logo3.jpeg",
			skills: "",
			content: ""
		},
		{
			position: "Требуется front-end разработчик",
			money: 100000,
			city: "Москва",
			logo_company: "apple.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется back-end разработчик",
			money: 200000,
			city: "Москва",
			logo_company: "cisco.png",
			skills: "",
			content: ""
		},
		{
			position: "Требуется верастальщик сайтов",
			money: 100000,
			city: "Москва",
			logo_company: "instagram.png",
			skills: "",
			content: ""
		}
	];
	let listOffers = document.querySelector(".carusel .list_offers");
	let listOffersStr = "";
	if(caruselOffers.length > 0){
			renderListOffers();
		}	
	else{
		listOffers.innerHTML = "Нет вакансий";
	}	
	function renderListOffers(){
		for(let caruselOffer of caruselOffers){
			listOffersStr += `<div class="item_offer">
							<img src="images/${caruselOffer.logo_company}" alt="">
							<div class="offer_info">
								<h3>${caruselOffer.position}</h3>
								<p class="city">${caruselOffer.city}</p>
								<strong class="money">${caruselOffer.money}</strong>
							</div>
						</div>`
		}
		listOffers.innerHTML = listOffersStr;
	};
	function init(selectorID){
			caruselElement = document.querySelector(selectorID);
			if (caruselElement === null) {
				console.log("Еrror");
				return 0;
			}
			let carusel = {
				btnPrev: document.querySelector(".prev"),
				btnNext: document.querySelector(".next"),
				listOffersWrap: document.querySelector(".carusel .list_offers"),
				offset: 0,
				countItem: function(){
					return this.listOffersWrap.children.length;
				},					
				heightElement: 125,
				heightAllOffers: function(){
					return this.countItem() * this.heightElement;
				},
				offsetPrev: function(){
					let app = this;
					this.btnPrev.addEventListener('click', (evt)=>{
						if(app.offset > -(app.heightAllOffers() - app.heightElement * 4) ){
							app.offset = app.offset - app.heightElement;
							app.listOffersWrap.style.marginTop = app.offset+"px";
						}
					});
				},
				offsetNext: function(){
					let app = this;
					this.btnNext.addEventListener('click', (evt)=>{
						if (app.offset != 0) {
							app.offset = app.offset + app.heightElement;
							app.listOffersWrap.style.marginTop = app.offset+"px";
						}
					});
				}
			}
				carusel.offsetPrev();
				carusel.offsetNext();
	}		
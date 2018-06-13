new Vue ({
	el: '#exercise',
  	data:{
    	name: 'Beth Salvatore',
			age: 53,
			imageLink: "https://img-9gag-fun.9cache.com/photo/amLdD7v_700bwp.webp"
    },

    methods:{
      randomizer: function (event){
        result = Math.floor(Math.random() * 101) + 1;
        return result;
        }
			}

});

(this["webpackJsonpmusic-master"]=this["webpackJsonpmusic-master"]||[]).push([[0],{17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),s=a(6),c=a.n(s),i=a(1),l=a(2),u=a(4),o=a(3),p=(a(12),a(16),function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={artistQuery:""},t.updateArtistQuery=function(e){t.setState({artistQuery:e.target.value})},t.handleKeyPress=function(e){"Enter"===e.key&&t.searchArtist()},t.searchArtist=function(){t.props.searchArtist(t.state.artistQuery)},t}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("span",{className:"search-box"},n.a.createElement("input",{className:"search-txt",onChange:this.updateArtistQuery,onKeyPress:this.handleKeyPress,placeholder:"Search for an Artist"}),n.a.createElement("span",{className:"search-btn",type:"button",onClick:this.searchArtist},n.a.createElement("i",{className:"fa fa-search"}))))}}]),a}(r.Component)),m=function(t){var e=t.artist;if(!e)return null;var a=e.images,r=e.name,s=e.followers,c=e.genres;return n.a.createElement("div",{className:"profile"},n.a.createElement("p",null,r),n.a.createElement("p",null,s.total," followers"),n.a.createElement("p",null,c.join(", ")),n.a.createElement("img",{className:"profile-img",src:a[0]&&a[0].url,alt:"artist-profile",style:{width:200,height:200,borderRadius:100,objectFit:"cover"}}))},h=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={playing:!1,audio:null,playingPreviewUrl:null},t.playAudio=function(e){return function(){var a=new Audio(e);t.state.playing?(t.state.audio.pause(),t.state.playingPreviewUrl===e?t.setState({playing:!1}):(a.play(),t.setState({audio:a,playingPreviewUrl:e}))):(a.play(),t.setState({playing:!0,audio:a,playingPreviewUrl:e}))}},t.trackIcon=function(e){return e.preview_url?t.state.playing&&t.state.playingPreviewUrl===e.preview_url?n.a.createElement("span",null,"| |"):n.a.createElement("span",null,"\u25b6"):n.a.createElement("span",null,"N/A")},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.tracks;return n.a.createElement("div",null,e.map((function(e){var a=e.id,r=e.name,s=e.album,c=e.preview_url;return n.a.createElement("div",{key:a,onClick:t.playAudio(c),className:"track"},n.a.createElement("img",{src:s.images[0].url,alt:"",className:"track-image"}),n.a.createElement("p",{className:"track-text"},r),n.a.createElement("p",{className:"track-icon"},t.trackIcon(e)))})))}}]),a}(r.Component),f="https://spotify-api-wrapper.appspot.com",y=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={artist:null,tracks:[]},t.searchArtist=function(e){fetch("".concat(f,"/artist/").concat(e)).then((function(t){return t.json()})).then((function(e){if(e.artists.total>0){var a=e.artists.items[0];t.setState({artist:a}),fetch("".concat(f,"/artist/").concat(a.id,"/top-tracks")).then((function(t){return t.json()})).then((function(e){return t.setState({tracks:e.tracks})})).catch((function(t){return alert(t.message)}))}})).catch((function(t){return alert(t.message)}))},t}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h2",null,"Musify"),n.a.createElement(p,{searchArtist:this.searchArtist}),n.a.createElement(m,{artist:this.state.artist}),n.a.createElement(h,{tracks:this.state.tracks}))}}]),a}(r.Component);a(17);c.a.render(n.a.createElement(y,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.c167583f.chunk.js.map
import{V as a,b as i,c as r}from"./index-DwDcCdzB.js";const h=/,/g,o="-->";class u extends a{parse(s,e){if(s==="")this.a&&(this.j.push(this.a),this.f.onCue?.(this.a),this.a=null),this.c=i.None;else if(this.c===i.Cue)this.a.text+=(this.a.text?`
`:"")+s;else if(s.includes(o)){const t=this.o(s,e);t&&(this.a=new r(t[0],t[1],t[2].join(" ")),this.a.id=this.l,this.c=i.Cue)}this.l=s}o(s,e){return super.o(s.replace(h,"."),e)}}function T(){return new u}export{u as SRTParser,T as default};
//# sourceMappingURL=srt-parser-D4bcjWLa.js.map

import{Buffer as i}from"buffer/";import l from"crypto-js";var s=class t{value;static ZERO=new t("0");static ONE=new t("1");constructor(e,r=16){if(r!==16)throw new Error(`Unsupported radix: ${r}. Only radix 16 (hexadecimal) is supported.`);if(typeof e=="bigint")this.value=e;else{let n=e.startsWith("-"),o=n?e.slice(1):e;this.value=BigInt(`0x${o}`),n&&(this.value=-this.value)}}add(e){return new t(this.value+e.value)}subtract(e){return new t(this.value-e.value)}multiply(e){return new t(this.value*e.value)}divide(e){return new t(this.value/e.value)}mod(e){return new t(this.value%e.value)}modPow(e,r){if(r.value===0n)throw new Error("Modulus cannot be zero.");let n=this.value%r.value,o=e.value,a=1n;for(;o>0n;)o%2n===1n&&(a=a*n%r.value),o/=2n,n=n*n%r.value;return new t(a)}negate(){return new t(-this.value)}abs(){return new t(this.value<0n?-this.value:this.value)}compareTo(e){return this.value<e.value?-1:this.value>e.value?1:0}equals(e){return this.value===e.value}toString(e=16){if(e!==16)throw new Error(`Unsupported radix: ${e}. Only radix 16 (hexadecimal) is supported.`);return this.value.toString(16)}};import{Buffer as Q}from"buffer/";import{Buffer as U}from"buffer/";import{lib as k,SHA256 as J}from"crypto-js";var I=t=>{let e=t instanceof U?k.WordArray.create(t):t,r=J(e).toString();return new Array(64-r.length).join("0")+r},p=t=>I(U.from(t,"hex")),u=t=>{if(!(t instanceof s))throw new Error("Not a BigInteger");let e=t.compareTo(s.ZERO)<0,r=t.abs().toString(16);if(r=r.length%2!==0?`0${r}`:r,r=/^[89a-f]/i.test(r)?`00${r}`:r,e){let o=r.split("").map(c=>{let g=~parseInt(c,16)&15;return"0123456789ABCDEF".charAt(g)}).join("");r=new s(o,16).add(s.ONE).toString(16),r.toUpperCase().startsWith("FF8")&&(r=r.substring(2))}return r},v=t=>U.from(k.WordArray.random(t).toString(),"hex"),N=t=>{if(t.length%2!==0)throw new Error("Hex encoded strings must have an even number length");let e=new Uint8Array(t.length/2);for(let r=0;r<t.length;r+=2){let n=t.slice(r,r+2).toLowerCase();if(n in V)e[r/2]=V[n];else throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`)}return e};var K=Q.from("Caldera Derived Key","utf8"),S=new s("2",16),m=new s("FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",16),M=new s(p(`${u(m)}${u(S)}`),16),V={"00":0,"01":1,"02":2,"03":3,"04":4,"05":5,"06":6,"07":7,"08":8,"09":9,"0a":10,"0b":11,"0c":12,"0d":13,"0e":14,"0f":15,10:16,11:17,12:18,13:19,14:20,15:21,16:22,17:23,18:24,19:25,"1a":26,"1b":27,"1c":28,"1d":29,"1e":30,"1f":31,20:32,21:33,22:34,23:35,24:36,25:37,26:38,27:39,28:40,29:41,"2a":42,"2b":43,"2c":44,"2d":45,"2e":46,"2f":47,30:48,31:49,32:50,33:51,34:52,35:53,36:54,37:55,38:56,39:57,"3a":58,"3b":59,"3c":60,"3d":61,"3e":62,"3f":63,40:64,41:65,42:66,43:67,44:68,45:69,46:70,47:71,48:72,49:73,"4a":74,"4b":75,"4c":76,"4d":77,"4e":78,"4f":79,50:80,51:81,52:82,53:83,54:84,55:85,56:86,57:87,58:88,59:89,"5a":90,"5b":91,"5c":92,"5d":93,"5e":94,"5f":95,60:96,61:97,62:98,63:99,64:100,65:101,66:102,67:103,68:104,69:105,"6a":106,"6b":107,"6c":108,"6d":109,"6e":110,"6f":111,70:112,71:113,72:114,73:115,74:116,75:117,76:118,77:119,78:120,79:121,"7a":122,"7b":123,"7c":124,"7d":125,"7e":126,"7f":127,80:128,81:129,82:130,83:131,84:132,85:133,86:134,87:135,88:136,89:137,"8a":138,"8b":139,"8c":140,"8d":141,"8e":142,"8f":143,90:144,91:145,92:146,93:147,94:148,95:149,96:150,97:151,98:152,99:153,"9a":154,"9b":155,"9c":156,"9d":157,"9e":158,"9f":159,a0:160,a1:161,a2:162,a3:163,a4:164,a5:165,a6:166,a7:167,a8:168,a9:169,aa:170,ab:171,ac:172,ad:173,ae:174,af:175,b0:176,b1:177,b2:178,b3:179,b4:180,b5:181,b6:182,b7:183,b8:184,b9:185,ba:186,bb:187,bc:188,bd:189,be:190,bf:191,c0:192,c1:193,c2:194,c3:195,c4:196,c5:197,c6:198,c7:199,c8:200,c9:201,ca:202,cb:203,cc:204,cd:205,ce:206,cf:207,d0:208,d1:209,d2:210,d3:211,d4:212,d5:213,d6:214,d7:215,d8:216,d9:217,da:218,db:219,dc:220,dd:221,de:222,df:223,e0:224,e1:225,e2:226,e3:227,e4:228,e5:229,e6:230,e7:231,e8:232,e9:233,ea:234,eb:235,ec:236,ed:237,ee:238,ef:239,f0:240,f1:241,f2:242,f3:243,f4:244,f5:245,f6:246,f7:247,f8:248,f9:249,fa:250,fb:251,fc:252,fd:253,fe:254,ff:255};var d=class extends Error{constructor(e="Could not sign SRP session"){super(e)}},w=class extends d{constructor(e="Could not sign SRP session because of missing or undefined ChallengeResponses in response"){super(e)}},E=class extends d{constructor(e="Could not sign SRP session because of missing or undefined SALT in response.ChallengeResponses"){super(e)}},b=class extends d{constructor(e="Could not sign SRP session because of missing or undefined SECRET_BLOCK in response.ChallengeResponses"){super(e)}},x=class extends d{constructor(e="Could not sign SRP session because of missing or undefined SRP_B in response.ChallengeResponses"){super(e)}},P=class extends d{constructor(e="Could not sign SRP session because of missing or undefined USER_ID_FOR_SRP in response.ChallengeResponses"){super(e)}},H=class extends d{constructor(e="Could not sign SRP session because of missing or undefined DEVICE_KEY in response.ChallengeResponses"){super(e)}},F=class extends Error{constructor(e="Aborting SRP due to 0 value"){super(e)}},y=class extends F{constructor(e="Aborting SRP due to 0 value received for client public key (A)"){super(e)}},R=class extends F{constructor(e="Aborting SRP due to 0 value received for server public key (B)"){super(e)}},T=class extends F{constructor(e="Aborting SRP due to 0 value received for public key hash (u)"){super(e)}};var ee=()=>{let t=v(128).toString("hex");return new s(t,16)},te=t=>{let e=S.modPow(t,m);if(e.equals(s.ZERO))throw new y;return e},X=(t,e)=>{let r=l.lib.WordArray.create(i.concat([K,i.from(String.fromCharCode(1),"utf8")])),n=t instanceof i?l.lib.WordArray.create(t):t,o=e instanceof i?l.lib.WordArray.create(e):e,a=l.HmacSHA256(n,o),c=l.HmacSHA256(r,a);return i.from(c.toString(),"hex").slice(0,16)},q=(t,e)=>{let r=p(u(t)+u(e)),n=new s(r,16);if(n.equals(s.ZERO))throw new T;return n},G=(t,e,r,n)=>{let o=S.modPow(t,m);return e.subtract(M.multiply(o)).modPow(r.add(n.multiply(t)),m)},Y=(t,e)=>new s(p(u(t)+e),16),re=()=>{let t=new Date,e="en-US",r="UTC",n=t.toLocaleString(e,{timeZone:r,weekday:"short"}),o=t.toLocaleString(e,{day:"numeric",timeZone:r}),a=t.toLocaleString(e,{month:"short",timeZone:r}),c=t.getUTCFullYear(),g=t.toLocaleString(e,{hour:"2-digit",hourCycle:"h23",minute:"2-digit",second:"2-digit",timeZone:r});return`${n} ${a} ${o} ${g} UTC ${c}`},we=(t,e,r)=>l.HmacSHA256(`${t}${e}`,r).toString(l.enc.Base64),ne=(t,e,r)=>{let o=`${r.split("_")[1]}${t}:${e}`;return I(o)},Z=(t,e,r)=>{let n=`${r}${t}:${e}`;return I(n)},Ee=(t,e)=>{let r=v(40).toString("base64"),n=Z(t,r,e),o=v(16).toString("hex"),a=u(new s(o,16)),c=N(a),g=i.from(c).toString("base64"),f=p(a+n),B=S.modPow(new s(f,16),m),A=u(B),C=N(A),h=i.from(C).toString("base64");return{DeviceRandomPassword:r,DeviceSecretVerifierConfig:{PasswordVerifier:h,Salt:g}}},be=(t,e,r,n=!0)=>{let o=r.split("_")[1],a=re(),c=ee(),g=te(c);return{username:t,poolId:r,poolIdAbbr:o,password:e,isHashed:n,timestamp:a,smallA:c.toString(16),largeA:g.toString(16)}},xe=(t,e)=>{if(!e.ChallengeParameters)throw new w;if(!e.ChallengeParameters.SALT)throw new E;if(!e.ChallengeParameters.SECRET_BLOCK)throw new b;if(!e.ChallengeParameters.SRP_B)throw new x;if(!e.ChallengeParameters.USER_ID_FOR_SRP)throw new P;let{SALT:r,SECRET_BLOCK:n,SRP_B:o,USER_ID_FOR_SRP:a}=e.ChallengeParameters,{poolId:c,poolIdAbbr:g,password:f,isHashed:B,timestamp:A,smallA:C,largeA:h}=t;if(o.replace(/^0+/,"")==="")throw new R;let _=B?f:ne(a,f,c),D=q(new s(h,16),new s(o,16)),O=Y(new s(r,16),_),$=G(O,new s(o,16),new s(C,16),D),L=X(i.from(u($),"hex"),i.from(u(D),"hex")),W=l.lib.WordArray.create(L),z=l.lib.WordArray.create(i.concat([i.from(g,"utf8"),i.from(a,"utf8"),i.from(n,"base64"),i.from(A,"utf8")])),j=l.enc.Base64.stringify(l.HmacSHA256(z,W));return{...t,salt:r,secret:n,largeB:o,passwordSignature:j}},Fe=(t,e,r,n)=>{if(!e.ChallengeParameters)throw new w;if(!e.ChallengeParameters.SALT)throw new E;if(!e.ChallengeParameters.SECRET_BLOCK)throw new b;if(!e.ChallengeParameters.SRP_B)throw new x;if(!e.ChallengeParameters.DEVICE_KEY)throw new H;let{DEVICE_KEY:o,SALT:a,SECRET_BLOCK:c,SRP_B:g}=e.ChallengeParameters,{timestamp:f,smallA:B,largeA:A}=t;if(g.replace(/^0+/,"")==="")throw new R;let C=Z(o,n,r),h=q(new s(A,16),new s(g,16)),_=Y(new s(a,16),C),D=G(_,new s(g,16),new s(B,16),h),O=X(i.from(u(D),"hex"),i.from(u(h),"hex")),$=l.lib.WordArray.create(O),L=l.lib.WordArray.create(i.concat([i.from(r,"utf8"),i.from(o,"utf8"),i.from(c,"base64"),i.from(f,"utf8")])),W=l.enc.Base64.stringify(l.HmacSHA256(L,$));return{...t,salt:a,secret:c,largeB:g,passwordSignature:W}},Re=(t,e)=>({...e,AuthParameters:{...e.AuthParameters,SRP_A:t.largeA}}),De=(t,e)=>({...e,ChallengeResponses:{...e.ChallengeResponses,PASSWORD_CLAIM_SECRET_BLOCK:t.secret,PASSWORD_CLAIM_SIGNATURE:t.passwordSignature,SRP_A:t.largeA,TIMESTAMP:t.timestamp}});export{y as AbortOnZeroASrpError,R as AbortOnZeroBSrpError,F as AbortOnZeroSrpError,T as AbortOnZeroUSrpError,w as MissingChallengeResponsesError,H as MissingDeviceKeyError,x as MissingLargeBError,E as MissingSaltError,b as MissingSecretError,P as MissingUserIdForSrpBError,d as SignSrpSessionError,Ee as createDeviceVerifier,ne as createPasswordHash,we as createSecretHash,be as createSrpSession,xe as signSrpSession,Fe as signSrpSessionWithDevice,De as wrapAuthChallenge,Re as wrapInitiateAuth};
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

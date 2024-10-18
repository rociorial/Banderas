const flags = [
    { names: ["Afganistán"], url: "https://www.banderas-mundo.es/data/flags/w1160/af.webp" },
    { names: ["Albania"], url: "https://www.banderas-mundo.es/data/flags/h160/al.webp" },
    { names: ["Alemania"], url: "https://www.banderas-mundo.es/data/flags/h160/de.webp" },
    { names: ["Andorra"], url: "https://www.banderas-mundo.es/data/flags/h160/ad.webp" },
    { names: ["Angola"], url: "https://www.banderas-mundo.es/data/flags/w1160/af.webp" },
    { names: ["Antigua y Barbuda"], url: "https://www.banderas-mundo.es/data/flags/h160/ag.webp" },
    { names: ["Arabia Saudita", "Arabia Saudí"], url: "https://www.banderas-mundo.es/data/flags/h160/sa.webp" },
    { names: ["Argelia"], url: "https://www.banderas-mundo.es/data/flags/h160/dz.webp" },
    { names: ["Argentina"], url: "https://www.banderas-mundo.es/data/flags/h160/ar.webp" },
    { names: ["Armenia"], url: "https://www.banderas-mundo.es/data/flags/w1160/af.webp" },
    { names: ["Australia"], url: "https://www.banderas-mundo.es/data/flags/h160/au.webp" },
    { names: ["Austria"], url: "https://www.banderas-mundo.es/data/flags/h160/at.webp" },
    { names: ["Azerbaiyán"], url: "https://www.banderas-mundo.es/data/flags/h160/az.webp" },
    { names: ["Bahamas"], url: "https://www.banderas-mundo.es/data/flags/h160/bs.webp" },
    { names: ["Baréin"], url: "https://www.banderas-mundo.es/data/flags/h160/bh.webp" },
    { names: ["Bangladesh"], url: "https://www.banderas-mundo.es/data/flags/h160/bd.webp" },
    { names: ["Barbados"], url: "https://www.banderas-mundo.es/data/flags/h160/bb.webp" },
    { names: ["Bélgica"], url: "https://www.banderas-mundo.es/data/flags/h160/be.webp" },
    { names: ["Belice"], url: "https://www.banderas-mundo.es/data/flags/h160/bz.webp" },
    { names: ["Benin"], url: "https://www.banderas-mundo.es/data/flags/h160/bj.webp" },
    { names: ["Bielorrusia"], url: "https://www.banderas-mundo.es/data/flags/h160/by.webp" },
    { names: ["Bolivia"], url: "https://www.banderas-mundo.es/data/flags/h160/bo.webp" },
    { names: ["Bosnia y Herzegovina", "Bosnia"], url: "https://www.banderas-mundo.es/data/flags/h160/ba.webp" },
    { names: ["Benin"], url: "https://www.banderas-mundo.es/data/flags/h160/bj.webp" },
    { names: ["Botsuana"], url: "https://www.banderas-mundo.es/data/flags/h160/bw.webp" },
    { names: ["Brasil"], url: "https://www.banderas-mundo.es/data/flags/h160/br.webp" },
    { names: ["Brunéi"], url: "https://www.banderas-mundo.es/data/flags/h160/bn.webp" },
    { names: ["Bulgaria"], url: "https://www.banderas-mundo.es/data/flags/h160/bg.webp" },
    { names: ["Burkina Faso"], url: "https://www.banderas-mundo.es/data/flags/h160/bf.webp" },
    { names: ["Burundi"], url: "https://www.banderas-mundo.es/data/flags/h160/bi.webp" },
    { names: ["Bután"], url: "https://www.banderas-mundo.es/data/flags/h160/bt.webp" },
    { names: ["Cabo Verde"], url: "https://www.banderas-mundo.es/data/flags/h160/cv.webp" },
    { names: ["Camboya"], url: "https://www.banderas-mundo.es/data/flags/h160/kh.webp" },
    { names: ["Camerún"], url: "https://www.banderas-mundo.es/data/flags/h160/cm.webp" },
    { names: ["Canadá"], url: "https://www.banderas-mundo.es/data/flags/h160/ca.webp" },
    { names: ["Qatar", "Catar"], url: "https://www.banderas-mundo.es/data/flags/h160/qa.webp" },
    { names: ["República del Congo", "Congo"], url: "https://www.banderas-mundo.es/data/flags/h160/cg.webp" },
    { names: ["Chad"], url: "https://www.banderas-mundo.es/data/flags/h160/td.webp" },
    { names: ["Chile"], url: "https://www.banderas-mundo.es/data/flags/h160/cl.webp" },
    { names: ["China"], url: "https://www.banderas-mundo.es/data/flags/h160/cn.webp" },
    { names: ["Chipre"], url: "https://www.banderas-mundo.es/data/flags/h160/cy.webp" },
    { names: ["Colombia"], url: "https://www.banderas-mundo.es/data/flags/h160/co.webp" },
    { names: ["Comoras"], url: "https://www.banderas-mundo.es/data/flags/h160/km.webp" },
    { names: ["Corea del Norte"], url: "https://www.banderas-mundo.es/data/flags/h160/kp.webp" },
    { names: ["Corea del Sur"], url: "https://www.banderas-mundo.es/data/flags/h160/kr.webp" },
    { names: ["Costa de Marfil"], url: "https://www.banderas-mundo.es/data/flags/h160/ci.webp" },
    { names: ["Costa Rica"], url: "https://www.banderas-mundo.es/data/flags/h160/cr.webp" },
    { names: ["Croacia"], url: "https://www.banderas-mundo.es/data/flags/h160/hr.webp" },
    { names: ["Cuba"], url: "https://www.banderas-mundo.es/data/flags/h160/cu.webp" },
    { names: ["Dinamarca"], url: "https://www.banderas-mundo.es/data/flags/h160/dk.webp" },
    { names: ["Dominica"], url: "https://www.banderas-mundo.es/data/flags/h160/dm.webp" },
    { names: ["Ecuador"], url: "https://www.banderas-mundo.es/data/flags/h160/ec.webp" },
    { names: ["Egipto"], url: "https://www.banderas-mundo.es/data/flags/h160/eg.webp" },
    { names: ["El Salvador", "Salvador"], url: "https://www.banderas-mundo.es/data/flags/h160/sv.webp" },
    { names: ["Emiratos Árabes Unidos", "Emiratos Árabes"], url: "https://www.banderas-mundo.es/data/flags/h160/ae.webp" },
    { names: ["Eritrea"], url: "https://www.banderas-mundo.es/data/flags/h160/er.webp" },
    { names: ["Eslovaquia"], url: "https://www.banderas-mundo.es/data/flags/h160/sk.webp" },
    { names: ["Eslovenia"], url: "https://www.banderas-mundo.es/data/flags/h160/si.webp" },
    { names: ["España"], url: "https://www.banderas-mundo.es/data/flags/h160/es.webp" },
    { names: ["Estados Unidos", "EE. UU."], url: "https://www.banderas-mundo.es/data/flags/h160/us.webp" },
    { names: ["Estonia"], url: "https://www.banderas-mundo.es/data/flags/h160/ee.webp" },
    { names: ["Etiopía"], url: "https://www.banderas-mundo.es/data/flags/h160/et.webp" },
    { names: ["Filipinas"], url: "https://www.banderas-mundo.es/data/flags/h160/ph.webp" },
    { names: ["Finlandia"], url: "https://www.banderas-mundo.es/data/flags/h160/fi.webp" },
    { names: ["Fiyi"], url: "https://www.banderas-mundo.es/data/flags/h160/fj.webp" },
    { names: ["Francia"], url: "https://www.banderas-mundo.es/data/flags/h160/fr.webp" },
    { names: ["Gabón"], url: "https://www.banderas-mundo.es/data/flags/h160/ga.webp" },
    { names: ["Gambia"], url: "https://www.banderas-mundo.es/data/flags/h160/gm.webp" },
    { names: ["Georgia"], url: "https://www.banderas-mundo.es/data/flags/h160/ge.webp" },
    { names: ["Ghana"], url: "https://www.banderas-mundo.es/data/flags/h160/gh.webp" },
    { names: ["Granada"], url: "https://www.banderas-mundo.es/data/flags/h160/gd.webp" },
    { names: ["Grecia"], url: "https://www.banderas-mundo.es/data/flags/h160/gr.webp" },
    { names: ["Guatemala"], url: "https://www.banderas-mundo.es/data/flags/h160/gt.webp" },
    { names: ["Guinea"], url: "https://www.banderas-mundo.es/data/flags/h160/gn.webp" },
    { names: ["Guinea Ecuatorial"], url: "https://www.banderas-mundo.es/data/flags/h160/gq.webp" },
    { names: ["Guinea-Bissau"], url: "https://www.banderas-mundo.es/data/flags/h160/gw.webp" },
    { names: ["Guyana"], url: "https://www.banderas-mundo.es/data/flags/h160/gy.webp" },
    { names: ["Haití"], url: "https://www.banderas-mundo.es/data/flags/h160/ht.webp" },
    { names: ["Honduras"], url: "https://www.banderas-mundo.es/data/flags/h160/hn.webp" },
    { names: ["Hungría"], url: "https://www.banderas-mundo.es/data/flags/h160/hu.webp" },
    { names: ["India"], url: "https://www.banderas-mundo.es/data/flags/h160/in.webp" },
    { names: ["Indonesia"], url: "https://www.banderas-mundo.es/data/flags/h160/id.webp" },
    { names: ["Irak"], url: "https://www.banderas-mundo.es/data/flags/h160/iq.webp" },
    { names: ["Irán"], url: "https://www.banderas-mundo.es/data/flags/h160/ir.webp" },
    { names: ["Irlanda"], url: "https://www.banderas-mundo.es/data/flags/h160/ie.webp" },
    { names: ["Islandia"], url: "https://www.banderas-mundo.es/data/flags/h160/is.webp" },
    { names: ["Islas Marshall"], url: "https://www.banderas-mundo.es/data/flags/h160/mh.webp" },
    { names: ["Islas Salomón"], url: "https://www.banderas-mundo.es/data/flags/h160/sb.webp" },
    { names: ["Israel"], url: "https://www.banderas-mundo.es/data/flags/h160/il.webp" },
    { names: ["Italia"], url: "https://www.banderas-mundo.es/data/flags/h160/it.webp" },
    { names: ["Jamaica"], url: "https://www.banderas-mundo.es/data/flags/h160/jm.webp" },
{ names: ["Japón"], url: "https://www.banderas-mundo.es/data/flags/h160/jp.webp" },
{ names: ["Jordania"], url: "https://www.banderas-mundo.es/data/flags/h160/jo.webp" },
{ names: ["Kazajistán"], url: "https://www.banderas-mundo.es/data/flags/h160/kz.webp" },
{ names: ["Kenia"], url: "https://www.banderas-mundo.es/data/flags/h160/ke.webp" },
{ names: ["Kirguistán"], url: "https://www.banderas-mundo.es/data/flags/h160/kg.webp" },
{ names: ["Kiribati"], url: "https://www.banderas-mundo.es/data/flags/h160/ki.webp" },
{ names: ["Kosovo"], url: "https://www.banderas-mundo.es/data/flags/h160/xk.webp" },
{ names: ["Kuwait"], url: "https://www.banderas-mundo.es/data/flags/h160/kw.webp" },
{ names: ["Laos"], url: "https://www.banderas-mundo.es/data/flags/h160/la.webp" },
{ names: ["Lesoto"], url: "https://www.banderas-mundo.es/data/flags/h160/ls.webp" },
{ names: ["Letonia"], url: "https://www.banderas-mundo.es/data/flags/h160/lv.webp" },
{ names: ["Líbano"], url: "https://www.banderas-mundo.es/data/flags/h160/lb.webp" },
{ names: ["Liberia"], url: "https://www.banderas-mundo.es/data/flags/h160/lr.webp" },
{ names: ["Libia"], url: "https://www.banderas-mundo.es/data/flags/h160/ly.webp" },
{ names: ["Liechtenstein"], url: "https://www.banderas-mundo.es/data/flags/h160/li.webp" },
{ names: ["Lituania"], url: "https://www.banderas-mundo.es/data/flags/h160/lt.webp" },
{ names: ["Luxemburgo"], url: "https://www.banderas-mundo.es/data/flags/h160/lu.webp" },
{ names: ["Macedonia del Norte"], url: "https://www.banderas-mundo.es/data/flags/h160/mk.webp" },
{ names: ["Madagascar"], url: "https://www.banderas-mundo.es/data/flags/h160/mg.webp" },
{ names: ["Malasia"], url: "https://www.banderas-mundo.es/data/flags/h160/my.webp" },
{ names: ["Malawi"], url: "https://www.banderas-mundo.es/data/flags/h160/mw.webp" },
{ names: ["Maldivas"], url: "https://www.banderas-mundo.es/data/flags/h160/mv.webp" },
{ names: ["Malí"], url: "https://www.banderas-mundo.es/data/flags/h160/ml.webp" },
{ names: ["Malta"], url: "https://www.banderas-mundo.es/data/flags/h160/mt.webp" },
{ names: ["Marruecos"], url: "https://www.banderas-mundo.es/data/flags/h160/ma.webp" },
{ names: ["Mauricio"], url: "https://www.banderas-mundo.es/data/flags/h160/mu.webp" },
{ names: ["Mauritania"], url: "https://www.banderas-mundo.es/data/flags/h160/mr.webp" },
{ names: ["México"], url: "https://www.banderas-mundo.es/data/flags/h160/mx.webp" },
{ names: ["Micronesia"], url: "https://www.banderas-mundo.es/data/flags/h160/fm.webp" },
{ names: ["Moldavia"], url: "https://www.banderas-mundo.es/data/flags/h160/md.webp" },
{ names: ["Mónaco"], url: "https://www.banderas-mundo.es/data/flags/h160/mc.webp" },
{ names: ["Mongolia"], url: "https://www.banderas-mundo.es/data/flags/h160/mn"},
{ names: ["Marruecos"], url: "https://www.banderas-mundo.es/data/flags/h160/ma.webp" },
{ names: ["Mauricio"], url: "https://www.banderas-mundo.es/data/flags/h160/mu.webp" },
{ names: ["Mauritania"], url: "https://www.banderas-mundo.es/data/flags/h160/mr.webp" },
{ names: ["México"], url: "https://www.banderas-mundo.es/data/flags/h160/mx.webp" },
{ names: ["Micronesia"], url: "https://www.banderas-mundo.es/data/flags/h160/fm.webp" },
{ names: ["Moldavia"], url: "https://www.banderas-mundo.es/data/flags/h160/md.webp" },
{ names: ["Mónaco"], url: "https://www.banderas-mundo.es/data/flags/h160/mc.webp" },
{ names: ["Mongolia"], url: "https://www.banderas-mundo.es/data/flags/h160/mn.webp" },
{ names: ["Montenegro"], url: "https://www.banderas-mundo.es/data/flags/h160/me.webp" },
{ names: ["Mozambique"], url: "https://www.banderas-mundo.es/data/flags/h160/mz.webp" },
{ names: ["Myanmar", "Birmania"], url: "https://www.banderas-mundo.es/data/flags/h160/mm.webp" },
{ names: ["Namibia"], url: "https://www.banderas-mundo.es/data/flags/h160/na.webp" },
{ names: ["Nauru"], url: "https://www.banderas-mundo.es/data/flags/h160/nr.webp" },
{ names: ["Nepal"], url: "https://www.banderas-mundo.es/data/flags/h160/np.webp" },
{ names: ["Nicaragua"], url: "https://www.banderas-mundo.es/data/flags/h160/ni.webp" },
{ names: ["Níger"], url: "https://www.banderas-mundo.es/data/flags/h160/ne.webp" },
{ names: ["Nigeria"], url: "https://www.banderas-mundo.es/data/flags/h160/ng.webp" },
{ names: ["Noruega"], url: "https://www.banderas-mundo.es/data/flags/h160/no.webp" },
{ names: ["Nueva Zelanda"], url: "https://www.banderas-mundo.es/data/flags/h160/nz.webp" },
{ names: ["Omán"], url: "https://www.banderas-mundo.es/data/flags/h160/om.webp" },
{ names: ["Países Bajos", "Holanda"], url: "https://www.banderas-mundo.es/data/flags/h160/nl.webp" },
{ names: ["Pakistán"], url: "https://www.banderas-mundo.es/data/flags/h160/pk.webp" },
{ names: ["Palaos"], url: "https://www.banderas-mundo.es/data/flags/h160/pw.webp" },
{ names: ["Palestina"], url: "https://www.banderas-mundo.es/data/flags/h160/ps.webp" },
{ names: ["Panamá"], url: "https://www.banderas-mundo.es/data/flags/h160/pa.webp" },
{ names: ["Papúa Nueva Guinea"], url: "https://www.banderas-mundo.es/data/flags/h160/pg.webp" },
{ names: ["Paraguay"], url: "https://www.banderas-mundo.es/data/flags/h160/py.webp" },
{ names: ["Perú"], url: "https://www.banderas-mundo.es/data/flags/h160/pe.webp" },
{ names: ["Polonia"], url: "https://www.banderas-mundo.es/data/flags/h160/pl.webp" },
{ names: ["Portugal"], url: "https://www.banderas-mundo.es/data/flags/h160/pt.webp" },
{ names: ["Reino Unido"], url: "https://www.banderas-mundo.es/data/flags/h160/gb.webp" },
{ names: ["República Centroafricana"], url: "https://www.banderas-mundo.es/data/flags/h160/cf.webp" },
{ names: ["República Checa"], url: "https://www.banderas-mundo.es/data/flags/h160/cz.webp" },
{ names: ["República Democrática del Congo", "Congo"], url: "https://www.banderas-mundo.es/data/flags/h160/cd.webp" },
{ names: ["República Dominicana"], url: "https://www.banderas-mundo.es/data/flags/h160/do.webp" },
{ names: ["Ruanda"], url: "https://www.banderas-mundo.es/data/flags/h160/rw.webp" },
{ names: ["Rumanía"], url: "https://www.banderas-mundo.es/data/flags/h160/ro.webp" },
{ names: ["Rusia"], url: "https://www.banderas-mundo.es/data/flags/h160/ru.webp" },
{ names: ["Rwanda"], url: "https://www.banderas-mundo.es/data/flags/h160/rw.webp" },
{ names: ["Rumanía"], url: "https://www.banderas-mundo.es/data/flags/h160/ro.webp" },
{ names: ["Samoa"], url: "https://www.banderas-mundo.es/data/flags/h160/ws.webp" },
{ names: ["San Cristóbal y Nieves"], url: "https://www.banderas-mundo.es/data/flags/h160/kn.webp" },
{ names: ["San Marino"], url: "https://www.banderas-mundo.es/data/flags/h160/sm.webp" },
{ names: ["San Vicente y las Granadinas"], url: "https://www.banderas-mundo.es/data/flags/h160/vc.webp" },
{ names: ["Santa Lucía"], url: "https://www.banderas-mundo.es/data/flags/h160/lc.webp" },
{ names: ["Santo Tomé y Príncipe"], url: "https://www.banderas-mundo.es/data/flags/h160/st.webp" },
{ names: ["Senegal"], url: "https://www.banderas-mundo.es/data/flags/h160/sn.webp" },
{ names: ["Serbia"], url: "https://www.banderas-mundo.es/data/flags/h160/rs.webp" },
{ names: ["Seychelles"], url: "https://www.banderas-mundo.es/data/flags/h160/sc.webp" },
{ names: ["Sierra Leona"], url: "https://www.banderas-mundo.es/data/flags/h160/sl.webp" },
{ names: ["Singapur"], url: "https://www.banderas-mundo.es/data/flags/h160/sg.webp" },
{ names: ["Siria"], url: "https://www.banderas-mundo.es/data/flags/h160/sy.webp" },
{ names: ["Somalia"], url: "https://www.banderas-mundo.es/data/flags/h160/so.webp" },
{ names: ["Sri Lanka"], url: "https://www.banderas-mundo.es/data/flags/h160/lk.webp" },
{ names: ["Suazilandia", "Esuatini"], url: "https://www.banderas-mundo.es/data/flags/h160/sz.webp" },
{ names: ["Sudáfrica"], url: "https://www.banderas-mundo.es/data/flags/h160/za.webp" },
{ names: ["Sudán"], url: "https://www.banderas-mundo.es/data/flags/h160/sd.webp" },
{ names: ["Sudán del Sur"], url: "https://www.banderas-mundo.es/data/flags/h160/ss.webp" },
{ names: ["Suecia"], url: "https://www.banderas-mundo.es/data/flags/h160/se.webp" },
{ names: ["Suiza"], url: "https://www.banderas-mundo.es/data/flags/h160/ch.webp" },
{ names: ["Surinam"], url: "https://www.banderas-mundo.es/data/flags/h160/sr.webp" },
{ names: ["Tailandia"], url: "https://www.banderas-mundo.es/data/flags/h160/th.webp" },
{ names: ["Taiwán"], url: "https://www.banderas-mundo.es/data/flags/h160/tw.webp" },
{ names: ["Tanzania"], url: "https://www.banderas-mundo.es/data/flags/h160/tz.webp" },
{ names: ["Tayikistán"], url: "https://www.banderas-mundo.es/data/flags/h160/tj.webp" },
{ names: ["Timor Oriental", "Timor"], url: "https://www.banderas-mundo.es/data/flags/h160/tl.webp" },
{ names: ["Togo"], url: "https://www.banderas-mundo.es/data/flags/h160/tg.webp" },
{ names: ["Tonga"], url: "https://www.banderas-mundo.es/data/flags/h160/to.webp" },
{ names: ["Trinidad y Tobago"], url: "https://www.banderas-mundo.es/data/flags/h160/tt.webp" },
{ names: ["Túnez"], url: "https://www.banderas-mundo.es/data/flags/h160/tn.webp" },
{ names: ["Turkmenistán"], url: "https://www.banderas-mundo.es/data/flags/h160/tm.webp" },
{ names: ["Turquía"], url: "https://www.banderas-mundo.es/data/flags/h160/tr.webp" },
{ names: ["Tuvalu"], url: "https://www.banderas-mundo.es/data/flags/h160/tv.webp" },
{ names: ["Ucrania"], url: "https://www.banderas-mundo.es/data/flags/h160/ua.webp" },
{ names: ["Uganda"], url: "https://www.banderas-mundo.es/data/flags/h160/ug.webp" },
{ names: ["Uruguay"], url: "https://www.banderas-mundo.es/data/flags/h160/uy.webp" },
{ names: ["Uzbekistán"], url: "https://www.banderas-mundo.es/data/flags/h160/uz.webp" },
{ names: ["Vanuatu"], url: "https://www.banderas-mundo.es/data/flags/h160/vu.webp" },
{ names: ["Ciudad del Vaticano", "Vaticano"], url: "https://www.banderas-mundo.es/data/flags/h160/va.webp" },
{ names: ["Venezuela"], url: "https://www.banderas-mundo.es/data/flags/h160/ve.webp" },
{ names: ["Vietnam"], url: "https://www.banderas-mundo.es/data/flags/h160/vn.webp" },
{ names: ["Yemen"], url: "https://www.banderas-mundo.es/data/flags/h160/ye.webp" },
{ names: ["Zambia"], url: "https://www.banderas-mundo.es/data/flags/h160/zm.webp" },
{ names: ["Zimbabue"], url: "https://www.banderas-mundo.es/data/flags/h160/zw.webp" },
];


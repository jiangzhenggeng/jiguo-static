define(["require","jquery"],function(a,b){function d(a){function d(d,e){var f="",g="",h="",i="";b.each(c,function(){h="",d==this.ProvinceName&&(h="selected",i=this.cities),f+="<option "+h+' value="'+this.ProvinceName+'">'+this.ProvinceName+"</option>"}),i||(i=c[0].cities),b.each(i,function(){h="",e==this.CityName&&(h="selected"),g+="<option "+h+' value="'+this.CityName+'">'+this.CityName+"</option>"}),a.province.html(f),a.city.html(g)}a=b.extend({province:"#province",city:"#city"},a),a.province=b(a.province),a.city=b(a.city);var e=a.province.attr("data-default"),f=a.city.attr("data-default");d(e,f),a.province.change(function(){d(b(this).val())})}var c=[{cities:[{ID:"1",PID:"1",ZipCode:"100000",CityName:"北京市"}],ProvinceName:"北京市",ID:"1"},{cities:[{ID:"2",PID:"2",ZipCode:"300000",CityName:"天津市"}],ProvinceName:"天津市",ID:"2"},{cities:[{ID:"3",PID:"3",ZipCode:"050000",CityName:"石家庄市"},{ID:"4",PID:"3",ZipCode:"063000",CityName:"唐山市"},{ID:"5",PID:"3",ZipCode:"066000",CityName:"秦皇岛市"},{ID:"6",PID:"3",ZipCode:"056000",CityName:"邯郸市"},{ID:"7",PID:"3",ZipCode:"054000",CityName:"邢台市"},{ID:"8",PID:"3",ZipCode:"071000",CityName:"保定市"},{ID:"9",PID:"3",ZipCode:"075000",CityName:"张家口市"},{ID:"10",PID:"3",ZipCode:"067000",CityName:"承德市"},{ID:"11",PID:"3",ZipCode:"061000",CityName:"沧州市"},{ID:"12",PID:"3",ZipCode:"065000",CityName:"廊坊市"},{ID:"13",PID:"3",ZipCode:"053000",CityName:"衡水市"}],ProvinceName:"河北省",ID:"3"},{cities:[{ID:"14",PID:"4",ZipCode:"030000",CityName:"太原市"},{ID:"15",PID:"4",ZipCode:"037000",CityName:"大同市"},{ID:"16",PID:"4",ZipCode:"045000",CityName:"阳泉市"},{ID:"17",PID:"4",ZipCode:"046000",CityName:"长治市"},{ID:"18",PID:"4",ZipCode:"048000",CityName:"晋城市"},{ID:"19",PID:"4",ZipCode:"036000",CityName:"朔州市"},{ID:"20",PID:"4",ZipCode:"030600",CityName:"晋中市"},{ID:"21",PID:"4",ZipCode:"044000",CityName:"运城市"},{ID:"22",PID:"4",ZipCode:"034000",CityName:"忻州市"},{ID:"23",PID:"4",ZipCode:"041000",CityName:"临汾市"},{ID:"24",PID:"4",ZipCode:"033000",CityName:"吕梁市"}],ProvinceName:"山西省",ID:"4"},{cities:[{ID:"25",PID:"5",ZipCode:"010000",CityName:"呼和浩特市"},{ID:"26",PID:"5",ZipCode:"014000",CityName:"包头市"},{ID:"27",PID:"5",ZipCode:"016000",CityName:"乌海市"},{ID:"28",PID:"5",ZipCode:"024000",CityName:"赤峰市"},{ID:"29",PID:"5",ZipCode:"028000",CityName:"通辽市"},{ID:"30",PID:"5",ZipCode:"017000",CityName:"鄂尔多斯市"},{ID:"31",PID:"5",ZipCode:"021000",CityName:"呼伦贝尔市"},{ID:"32",PID:"5",ZipCode:"015000",CityName:"巴彦淖尔市"},{ID:"33",PID:"5",ZipCode:"012000",CityName:"乌兰察布市"},{ID:"34",PID:"5",ZipCode:"137400",CityName:"兴安盟"},{ID:"35",PID:"5",ZipCode:"026000",CityName:"锡林郭勒盟"},{ID:"36",PID:"5",ZipCode:"750300",CityName:"阿拉善盟"}],ProvinceName:"内蒙古自治区",ID:"5"},{cities:[{ID:"37",PID:"6",ZipCode:"110000",CityName:"沈阳市"},{ID:"38",PID:"6",ZipCode:"116000",CityName:"大连市"},{ID:"39",PID:"6",ZipCode:"114000",CityName:"鞍山市"},{ID:"40",PID:"6",ZipCode:"113000",CityName:"抚顺市"},{ID:"41",PID:"6",ZipCode:"117000",CityName:"本溪市"},{ID:"42",PID:"6",ZipCode:"118000",CityName:"丹东市"},{ID:"43",PID:"6",ZipCode:"121000",CityName:"锦州市"},{ID:"44",PID:"6",ZipCode:"115000",CityName:"营口市"},{ID:"45",PID:"6",ZipCode:"123000",CityName:"阜新市"},{ID:"46",PID:"6",ZipCode:"111000",CityName:"辽阳市"},{ID:"47",PID:"6",ZipCode:"124000",CityName:"盘锦市"},{ID:"48",PID:"6",ZipCode:"112000",CityName:"铁岭市"},{ID:"49",PID:"6",ZipCode:"122000",CityName:"朝阳市"},{ID:"50",PID:"6",ZipCode:"125000",CityName:"葫芦岛市"}],ProvinceName:"辽宁省",ID:"6"},{cities:[{ID:"51",PID:"7",ZipCode:"130000",CityName:"长春市"},{ID:"52",PID:"7",ZipCode:"132000",CityName:"吉林市"},{ID:"53",PID:"7",ZipCode:"136000",CityName:"四平市"},{ID:"54",PID:"7",ZipCode:"136200",CityName:"辽源市"},{ID:"55",PID:"7",ZipCode:"134000",CityName:"通化市"},{ID:"56",PID:"7",ZipCode:"134300",CityName:"白山市"},{ID:"57",PID:"7",ZipCode:"138000",CityName:"松原市"},{ID:"58",PID:"7",ZipCode:"137000",CityName:"白城市"},{ID:"59",PID:"7",ZipCode:"133000",CityName:"延边朝鲜族自治州"}],ProvinceName:"吉林省",ID:"7"},{cities:[{ID:"60",PID:"8",ZipCode:"150000",CityName:"哈尔滨市"},{ID:"61",PID:"8",ZipCode:"161000",CityName:"齐齐哈尔市"},{ID:"62",PID:"8",ZipCode:"158100",CityName:"鸡西市"},{ID:"63",PID:"8",ZipCode:"154100",CityName:"鹤岗市"},{ID:"64",PID:"8",ZipCode:"155100",CityName:"双鸭山市"},{ID:"65",PID:"8",ZipCode:"163000",CityName:"大庆市"},{ID:"66",PID:"8",ZipCode:"153000",CityName:"伊春市"},{ID:"67",PID:"8",ZipCode:"154000",CityName:"佳木斯市"},{ID:"68",PID:"8",ZipCode:"154600",CityName:"七台河市"},{ID:"69",PID:"8",ZipCode:"157000",CityName:"牡丹江市"},{ID:"70",PID:"8",ZipCode:"164300",CityName:"黑河市"},{ID:"71",PID:"8",ZipCode:"152000",CityName:"绥化市"},{ID:"72",PID:"8",ZipCode:"165000",CityName:"大兴安岭地区"}],ProvinceName:"黑龙江省",ID:"8"},{cities:[{ID:"73",PID:"9",ZipCode:"200000",CityName:"上海市"}],ProvinceName:"上海市",ID:"9"},{cities:[{ID:"74",PID:"10",ZipCode:"210000",CityName:"南京市"},{ID:"75",PID:"10",ZipCode:"214000",CityName:"无锡市"},{ID:"76",PID:"10",ZipCode:"221000",CityName:"徐州市"},{ID:"77",PID:"10",ZipCode:"213000",CityName:"常州市"},{ID:"78",PID:"10",ZipCode:"215000",CityName:"苏州市"},{ID:"79",PID:"10",ZipCode:"226000",CityName:"南通市"},{ID:"80",PID:"10",ZipCode:"222000",CityName:"连云港市"},{ID:"81",PID:"10",ZipCode:"223001",CityName:"淮安市"},{ID:"82",PID:"10",ZipCode:"224000",CityName:"盐城市"},{ID:"83",PID:"10",ZipCode:"225000",CityName:"扬州市"},{ID:"84",PID:"10",ZipCode:"212000",CityName:"镇江市"},{ID:"85",PID:"10",ZipCode:"225300",CityName:"泰州市"},{ID:"86",PID:"10",ZipCode:"223800",CityName:"宿迁市"}],ProvinceName:"江苏省",ID:"10"},{cities:[{ID:"87",PID:"11",ZipCode:"310000",CityName:"杭州市"},{ID:"88",PID:"11",ZipCode:"315000",CityName:"宁波市"},{ID:"89",PID:"11",ZipCode:"325000",CityName:"温州市"},{ID:"90",PID:"11",ZipCode:"314000",CityName:"嘉兴市"},{ID:"91",PID:"11",ZipCode:"313000",CityName:"湖州市"},{ID:"92",PID:"11",ZipCode:"312000",CityName:"绍兴市"},{ID:"93",PID:"11",ZipCode:"321000",CityName:"金华市"},{ID:"94",PID:"11",ZipCode:"324000",CityName:"衢州市"},{ID:"95",PID:"11",ZipCode:"316000",CityName:"舟山市"},{ID:"96",PID:"11",ZipCode:"318000",CityName:"台州市"},{ID:"97",PID:"11",ZipCode:"323000",CityName:"丽水市"}],ProvinceName:"浙江省",ID:"11"},{cities:[{ID:"98",PID:"12",ZipCode:"230000",CityName:"合肥市"},{ID:"99",PID:"12",ZipCode:"241000",CityName:"芜湖市"},{ID:"100",PID:"12",ZipCode:"233000",CityName:"蚌埠市"},{ID:"101",PID:"12",ZipCode:"232000",CityName:"淮南市"},{ID:"102",PID:"12",ZipCode:"243000",CityName:"马鞍山市"},{ID:"103",PID:"12",ZipCode:"235000",CityName:"淮北市"},{ID:"104",PID:"12",ZipCode:"244000",CityName:"铜陵市"},{ID:"105",PID:"12",ZipCode:"246000",CityName:"安庆市"},{ID:"106",PID:"12",ZipCode:"245000",CityName:"黄山市"},{ID:"107",PID:"12",ZipCode:"239000",CityName:"滁州市"},{ID:"108",PID:"12",ZipCode:"236000",CityName:"阜阳市"},{ID:"109",PID:"12",ZipCode:"234000",CityName:"宿州市"},{ID:"110",PID:"12",ZipCode:"238000",CityName:"巢湖市"},{ID:"111",PID:"12",ZipCode:"237000",CityName:"六安市"},{ID:"112",PID:"12",ZipCode:"236000",CityName:"亳州市"},{ID:"113",PID:"12",ZipCode:"247100",CityName:"池州市"},{ID:"114",PID:"12",ZipCode:"242000",CityName:"宣城市"}],ProvinceName:"安徽省",ID:"12"},{cities:[{ID:"115",PID:"13",ZipCode:"350000",CityName:"福州市"},{ID:"116",PID:"13",ZipCode:"361000",CityName:"厦门市"},{ID:"117",PID:"13",ZipCode:"351100",CityName:"莆田市"},{ID:"118",PID:"13",ZipCode:"365000",CityName:"三明市"},{ID:"119",PID:"13",ZipCode:"362000",CityName:"泉州市"},{ID:"120",PID:"13",ZipCode:"363000",CityName:"漳州市"},{ID:"121",PID:"13",ZipCode:"353000",CityName:"南平市"},{ID:"122",PID:"13",ZipCode:"364000",CityName:"龙岩市"},{ID:"123",PID:"13",ZipCode:"352000",CityName:"宁德市"}],ProvinceName:"福建省",ID:"13"},{cities:[{ID:"124",PID:"14",ZipCode:"330000",CityName:"南昌市"},{ID:"125",PID:"14",ZipCode:"333000",CityName:"景德镇市"},{ID:"126",PID:"14",ZipCode:"337000",CityName:"萍乡市"},{ID:"127",PID:"14",ZipCode:"332000",CityName:"九江市"},{ID:"128",PID:"14",ZipCode:"338000",CityName:"新余市"},{ID:"129",PID:"14",ZipCode:"335000",CityName:"鹰潭市"},{ID:"130",PID:"14",ZipCode:"341000",CityName:"赣州市"},{ID:"131",PID:"14",ZipCode:"343000",CityName:"吉安市"},{ID:"132",PID:"14",ZipCode:"336000",CityName:"宜春市"},{ID:"133",PID:"14",ZipCode:"344000",CityName:"抚州市"},{ID:"134",PID:"14",ZipCode:"334000",CityName:"上饶市"}],ProvinceName:"江西省",ID:"14"},{cities:[{ID:"135",PID:"15",ZipCode:"250000",CityName:"济南市"},{ID:"136",PID:"15",ZipCode:"266000",CityName:"青岛市"},{ID:"137",PID:"15",ZipCode:"255000",CityName:"淄博市"},{ID:"138",PID:"15",ZipCode:"277000",CityName:"枣庄市"},{ID:"139",PID:"15",ZipCode:"257000",CityName:"东营市"},{ID:"140",PID:"15",ZipCode:"264000",CityName:"烟台市"},{ID:"141",PID:"15",ZipCode:"261000",CityName:"潍坊市"},{ID:"142",PID:"15",ZipCode:"272000",CityName:"济宁市"},{ID:"143",PID:"15",ZipCode:"271000",CityName:"泰安市"},{ID:"144",PID:"15",ZipCode:"264200",CityName:"威海市"},{ID:"145",PID:"15",ZipCode:"276800",CityName:"日照市"},{ID:"146",PID:"15",ZipCode:"271100",CityName:"莱芜市"},{ID:"147",PID:"15",ZipCode:"276000",CityName:"临沂市"},{ID:"148",PID:"15",ZipCode:"253000",CityName:"德州市"},{ID:"149",PID:"15",ZipCode:"252000",CityName:"聊城市"},{ID:"150",PID:"15",ZipCode:"256600",CityName:"滨州市"},{ID:"151",PID:"15",ZipCode:"274000",CityName:"荷泽市"}],ProvinceName:"山东省",ID:"15"},{cities:[{ID:"152",PID:"16",ZipCode:"450000",CityName:"郑州市"},{ID:"153",PID:"16",ZipCode:"475000",CityName:"开封市"},{ID:"154",PID:"16",ZipCode:"471000",CityName:"洛阳市"},{ID:"155",PID:"16",ZipCode:"467000",CityName:"平顶山市"},{ID:"156",PID:"16",ZipCode:"455000",CityName:"安阳市"},{ID:"157",PID:"16",ZipCode:"458000",CityName:"鹤壁市"},{ID:"158",PID:"16",ZipCode:"453000",CityName:"新乡市"},{ID:"159",PID:"16",ZipCode:"454100",CityName:"焦作市"},{ID:"160",PID:"16",ZipCode:"457000",CityName:"濮阳市"},{ID:"161",PID:"16",ZipCode:"461000",CityName:"许昌市"},{ID:"162",PID:"16",ZipCode:"462000",CityName:"漯河市"},{ID:"163",PID:"16",ZipCode:"472000",CityName:"三门峡市"},{ID:"164",PID:"16",ZipCode:"473000",CityName:"南阳市"},{ID:"165",PID:"16",ZipCode:"476000",CityName:"商丘市"},{ID:"166",PID:"16",ZipCode:"464000",CityName:"信阳市"},{ID:"167",PID:"16",ZipCode:"466000",CityName:"周口市"},{ID:"168",PID:"16",ZipCode:"463000",CityName:"驻马店市"},{ID:"999",PID:"16",ZipCode:"454650",CityName:"济源市"}],ProvinceName:"河南省",ID:"16"},{cities:[{ID:"169",PID:"17",ZipCode:"430000",CityName:"武汉市"},{ID:"170",PID:"17",ZipCode:"435000",CityName:"黄石市"},{ID:"171",PID:"17",ZipCode:"442000",CityName:"十堰市"},{ID:"172",PID:"17",ZipCode:"443000",CityName:"宜昌市"},{ID:"173",PID:"17",ZipCode:"441000",CityName:"襄樊市"},{ID:"174",PID:"17",ZipCode:"436000",CityName:"鄂州市"},{ID:"175",PID:"17",ZipCode:"448000",CityName:"荆门市"},{ID:"176",PID:"17",ZipCode:"432000",CityName:"孝感市"},{ID:"177",PID:"17",ZipCode:"434000",CityName:"荆州市"},{ID:"178",PID:"17",ZipCode:"438000",CityName:"黄冈市"},{ID:"179",PID:"17",ZipCode:"437000",CityName:"咸宁市"},{ID:"180",PID:"17",ZipCode:"441300",CityName:"随州市"},{ID:"181",PID:"17",ZipCode:"445000",CityName:"恩施土家族苗族自治州"},{ID:"182",PID:"17",ZipCode:"442400",CityName:"神农架"},{ID:"182",PID:"17",ZipCode:"433100",CityName:"潜江市"},{ID:"182",PID:"17",ZipCode:"433000",CityName:"仙桃市"},{ID:"182",PID:"17",ZipCode:"431700",CityName:"天门市"}],ProvinceName:"湖北省",ID:"17"},{cities:[{ID:"183",PID:"18",ZipCode:"410000",CityName:"长沙市"},{ID:"184",PID:"18",ZipCode:"412000",CityName:"株洲市"},{ID:"185",PID:"18",ZipCode:"411100",CityName:"湘潭市"},{ID:"186",PID:"18",ZipCode:"421200",CityName:"衡阳市"},{ID:"187",PID:"18",ZipCode:"422000",CityName:"邵阳市"},{ID:"188",PID:"18",ZipCode:"414000",CityName:"岳阳市"},{ID:"189",PID:"18",ZipCode:"415000",CityName:"常德市"},{ID:"190",PID:"18",ZipCode:"427000",CityName:"张家界市"},{ID:"191",PID:"18",ZipCode:"413000",CityName:"益阳市"},{ID:"192",PID:"18",ZipCode:"423000",CityName:"郴州市"},{ID:"193",PID:"18",ZipCode:"425000",CityName:"永州市"},{ID:"194",PID:"18",ZipCode:"418000",CityName:"怀化市"},{ID:"195",PID:"18",ZipCode:"417000",CityName:"娄底市"},{ID:"196",PID:"18",ZipCode:"416000",CityName:"湘西土家族苗族自治州"}],ProvinceName:"湖南省",ID:"18"},{cities:[{ID:"197",PID:"19",ZipCode:"510000",CityName:"广州市"},{ID:"198",PID:"19",ZipCode:"512000",CityName:"韶关市"},{ID:"199",PID:"19",ZipCode:"518000",CityName:"深圳市"},{ID:"200",PID:"19",ZipCode:"519000",CityName:"珠海市"},{ID:"201",PID:"19",ZipCode:"515000",CityName:"汕头市"},{ID:"202",PID:"19",ZipCode:"528000",CityName:"佛山市"},{ID:"203",PID:"19",ZipCode:"529000",CityName:"江门市"},{ID:"204",PID:"19",ZipCode:"524000",CityName:"湛江市"},{ID:"205",PID:"19",ZipCode:"525000",CityName:"茂名市"},{ID:"206",PID:"19",ZipCode:"526000",CityName:"肇庆市"},{ID:"207",PID:"19",ZipCode:"516000",CityName:"惠州市"},{ID:"208",PID:"19",ZipCode:"514000",CityName:"梅州市"},{ID:"209",PID:"19",ZipCode:"516600",CityName:"汕尾市"},{ID:"210",PID:"19",ZipCode:"517000",CityName:"河源市"},{ID:"211",PID:"19",ZipCode:"529500",CityName:"阳江市"},{ID:"212",PID:"19",ZipCode:"511500",CityName:"清远市"},{ID:"213",PID:"19",ZipCode:"523000",CityName:"东莞市"},{ID:"214",PID:"19",ZipCode:"528400",CityName:"中山市"},{ID:"215",PID:"19",ZipCode:"521000",CityName:"潮州市"},{ID:"216",PID:"19",ZipCode:"522000",CityName:"揭阳市"},{ID:"217",PID:"19",ZipCode:"527300",CityName:"云浮市"}],ProvinceName:"广东省",ID:"19"},{cities:[{ID:"218",PID:"20",ZipCode:"530000",CityName:"南宁市"},{ID:"219",PID:"20",ZipCode:"545000",CityName:"柳州市"},{ID:"220",PID:"20",ZipCode:"541000",CityName:"桂林市"},{ID:"221",PID:"20",ZipCode:"543000",CityName:"梧州市"},{ID:"222",PID:"20",ZipCode:"536000",CityName:"北海市"},{ID:"223",PID:"20",ZipCode:"538000",CityName:"防城港市"},{ID:"224",PID:"20",ZipCode:"535000",CityName:"钦州市"},{ID:"225",PID:"20",ZipCode:"537000",CityName:"贵港市"},{ID:"226",PID:"20",ZipCode:"537000",CityName:"玉林市"},{ID:"227",PID:"20",ZipCode:"533000",CityName:"百色市"},{ID:"228",PID:"20",ZipCode:"542800",CityName:"贺州市"},{ID:"229",PID:"20",ZipCode:"547000",CityName:"河池市"},{ID:"230",PID:"20",ZipCode:"546100",CityName:"来宾市"},{ID:"231",PID:"20",ZipCode:"532200",CityName:"崇左市"}],ProvinceName:"广西壮族自治区",ID:"20"},{cities:[{ID:"232",PID:"21",ZipCode:"570100",CityName:"海口市"},{ID:"233",PID:"21",ZipCode:"572000",CityName:"三亚市"}],ProvinceName:"海南省",ID:"21"},{cities:[{ID:"234",PID:"22",ZipCode:"400000",CityName:"重庆市"}],ProvinceName:"重庆市",ID:"22"},{cities:[{ID:"235",PID:"23",ZipCode:"610000",CityName:"成都市"},{ID:"236",PID:"23",ZipCode:"643000",CityName:"自贡市"},{ID:"237",PID:"23",ZipCode:"617000",CityName:"攀枝花市"},{ID:"238",PID:"23",ZipCode:"646000",CityName:"泸州市"},{ID:"239",PID:"23",ZipCode:"618000",CityName:"德阳市"},{ID:"240",PID:"23",ZipCode:"621000",CityName:"绵阳市"},{ID:"241",PID:"23",ZipCode:"628000",CityName:"广元市"},{ID:"242",PID:"23",ZipCode:"629000",CityName:"遂宁市"},{ID:"243",PID:"23",ZipCode:"641000",CityName:"内江市"},{ID:"244",PID:"23",ZipCode:"614000",CityName:"乐山市"},{ID:"245",PID:"23",ZipCode:"637000",CityName:"南充市"},{ID:"246",PID:"23",ZipCode:"620000",CityName:"眉山市"},{ID:"247",PID:"23",ZipCode:"644000",CityName:"宜宾市"},{ID:"248",PID:"23",ZipCode:"638500",CityName:"广安市"},{ID:"249",PID:"23",ZipCode:"635000",CityName:"达州市"},{ID:"250",PID:"23",ZipCode:"625000",CityName:"雅安市"},{ID:"251",PID:"23",ZipCode:"636600",CityName:"巴中市"},{ID:"252",PID:"23",ZipCode:"641300",CityName:"资阳市"},{ID:"253",PID:"23",ZipCode:"624000",CityName:"阿坝藏族羌族自治州"},{ID:"254",PID:"23",ZipCode:"6267000",CityName:"甘孜藏族自治州"},{ID:"255",PID:"23",ZipCode:"615000",CityName:"凉山彝族自治州"}],ProvinceName:"四川省",ID:"23"},{cities:[{ID:"256",PID:"24",ZipCode:"550000",CityName:"贵阳市"},{ID:"257",PID:"24",ZipCode:"553000",CityName:"六盘水市"},{ID:"258",PID:"24",ZipCode:"563000",CityName:"遵义市"},{ID:"259",PID:"24",ZipCode:"561000",CityName:"安顺市"},{ID:"260",PID:"24",ZipCode:"554300",CityName:"铜仁地区"},{ID:"261",PID:"24",ZipCode:"562400",CityName:"黔西南布依族苗族自治州"},{ID:"262",PID:"24",ZipCode:"551700",CityName:"毕节地区"},{ID:"263",PID:"24",ZipCode:"556000",CityName:"黔东南苗族侗族自治州"},{ID:"264",PID:"24",ZipCode:"558000",CityName:"黔南布依族苗族自治州"}],ProvinceName:"贵州省",ID:"24"},{cities:[{ID:"265",PID:"25",ZipCode:"650000",CityName:"昆明市"},{ID:"266",PID:"25",ZipCode:"655000",CityName:"曲靖市"},{ID:"267",PID:"25",ZipCode:"653100",CityName:"玉溪市"},{ID:"268",PID:"25",ZipCode:"678000",CityName:"保山市"},{ID:"269",PID:"25",ZipCode:"657000",CityName:"昭通市"},{ID:"270",PID:"25",ZipCode:"674100",CityName:"丽江市"},{ID:"271",PID:"25",ZipCode:"665000",CityName:"普洱市"},{ID:"272",PID:"25",ZipCode:"677000",CityName:"临沧市"},{ID:"273",PID:"25",ZipCode:"675000",CityName:"楚雄彝族自治州"},{ID:"274",PID:"25",ZipCode:"661400",CityName:"红河哈尼族彝族自治州"},{ID:"275",PID:"25",ZipCode:"663000",CityName:"文山壮族苗族自治州"},{ID:"276",PID:"25",ZipCode:"666100",CityName:"西双版纳傣族自治州"},{ID:"277",PID:"25",ZipCode:"671000",CityName:"大理白族自治州"},{ID:"278",PID:"25",ZipCode:"678400",CityName:"德宏傣族景颇族自治州"},{ID:"279",PID:"25",ZipCode:"673100",CityName:"怒江傈僳族自治州"},{ID:"280",PID:"25",ZipCode:"674400",CityName:"迪庆藏族自治州"}],ProvinceName:"云南省",ID:"25"},{cities:[{ID:"281",PID:"26",ZipCode:"850000",CityName:"拉萨市"},{ID:"282",PID:"26",ZipCode:"854000",CityName:"昌都地区"},{ID:"283",PID:"26",ZipCode:"856000",CityName:"山南地区"},{ID:"284",PID:"26",ZipCode:"857000",CityName:"日喀则地区"},{ID:"285",PID:"26",ZipCode:"852000",CityName:"那曲地区"},{ID:"286",PID:"26",ZipCode:"859000",CityName:"阿里地区"},{ID:"287",PID:"26",ZipCode:"860000",CityName:"林芝地区"}],ProvinceName:"西藏自治区",ID:"26"},{cities:[{ID:"288",PID:"27",ZipCode:"710000",CityName:"西安市"},{ID:"289",PID:"27",ZipCode:"727000",CityName:"铜川市"},{ID:"290",PID:"27",ZipCode:"721000",CityName:"宝鸡市"},{ID:"291",PID:"27",ZipCode:"712000",CityName:"咸阳市"},{ID:"292",PID:"27",ZipCode:"714000",CityName:"渭南市"},{ID:"293",PID:"27",ZipCode:"716000",CityName:"延安市"},{ID:"294",PID:"27",ZipCode:"723000",CityName:"汉中市"},{ID:"295",PID:"27",ZipCode:"719000",CityName:"榆林市"},{ID:"296",PID:"27",ZipCode:"725000",CityName:"安康市"},{ID:"297",PID:"27",ZipCode:"726000",CityName:"商洛市"}],ProvinceName:"陕西省",ID:"27"},{cities:[{ID:"298",PID:"28",ZipCode:"730000",CityName:"兰州市"},{ID:"299",PID:"28",ZipCode:"735100",CityName:"嘉峪关市"},{ID:"300",PID:"28",ZipCode:"737100",CityName:"金昌市"},{ID:"301",PID:"28",ZipCode:"730900",CityName:"白银市"},{ID:"302",PID:"28",ZipCode:"741000",CityName:"天水市"},{ID:"303",PID:"28",ZipCode:"733000",CityName:"武威市"},{ID:"304",PID:"28",ZipCode:"734000",CityName:"张掖市"},{ID:"305",PID:"28",ZipCode:"744000",CityName:"平凉市"},{ID:"306",PID:"28",ZipCode:"735000",CityName:"酒泉市"},{ID:"307",PID:"28",ZipCode:"745000",CityName:"庆阳市"},{ID:"308",PID:"28",ZipCode:"743000",CityName:"定西市"},{ID:"309",PID:"28",ZipCode:"742500",CityName:"陇南市"},{ID:"310",PID:"28",ZipCode:"731100",CityName:"临夏回族自治州"},{ID:"311",PID:"28",ZipCode:"747000",CityName:"甘南藏族自治州"}],ProvinceName:"甘肃省",ID:"28"},{cities:[{ID:"312",PID:"29",ZipCode:"810000",CityName:"西宁市"},{ID:"313",PID:"29",ZipCode:"810600",CityName:"海东地区"},{ID:"314",PID:"29",ZipCode:"812200",CityName:"海北藏族自治州"},{ID:"315",PID:"29",ZipCode:"811300",CityName:"黄南藏族自治州"},{ID:"316",PID:"29",ZipCode:"813000",CityName:"海南藏族自治州"},{ID:"317",PID:"29",ZipCode:"814000",CityName:"果洛藏族自治州"},{ID:"318",PID:"29",ZipCode:"815000",CityName:"玉树藏族自治州"},{ID:"319",PID:"29",ZipCode:"817000",CityName:"海西蒙古族藏族自治州"}],ProvinceName:"青海省",ID:"29"},{cities:[{ID:"320",PID:"30",ZipCode:"750000",CityName:"银川市"},{ID:"321",PID:"30",ZipCode:"753000",CityName:"石嘴山市"},{ID:"322",PID:"30",ZipCode:"751100",CityName:"吴忠市"},{ID:"323",PID:"30",ZipCode:"756000",CityName:"固原市"},{ID:"324",PID:"30",ZipCode:"75500",CityName:"中卫市"}],ProvinceName:"宁夏回族自治区",ID:"30"},{cities:[{ID:"325",PID:"31",ZipCode:"830000",CityName:"乌鲁木齐市"},{ID:"326",PID:"31",ZipCode:"834000",CityName:"克拉玛依市"},{ID:"327",PID:"31",ZipCode:"838000",CityName:"吐鲁番地区"},{ID:"328",PID:"31",ZipCode:"839000",CityName:"哈密地区"},{ID:"329",PID:"31",ZipCode:"831100",CityName:"昌吉回族自治州"},{ID:"330",PID:"31",ZipCode:"833400",CityName:"博尔塔拉蒙古自治州"},{ID:"331",PID:"31",ZipCode:"841000",CityName:"巴音郭楞蒙古自治州"},{ID:"332",PID:"31",ZipCode:"843000",CityName:"阿克苏地区"},{ID:"333",PID:"31",ZipCode:"845350",CityName:"克孜勒苏柯尔克孜自治州"},{ID:"334",PID:"31",ZipCode:"844000",CityName:"喀什地区"},{ID:"335",PID:"31",ZipCode:"848000",CityName:"和田地区"},{ID:"336",PID:"31",ZipCode:"835100",CityName:"伊犁哈萨克自治州"},{ID:"337",PID:"31",ZipCode:"834700",CityName:"塔城地区"},{ID:"338",PID:"31",ZipCode:"836500",CityName:"阿勒泰地区"},{ID:"339",PID:"31",ZipCode:"832000",CityName:"石河子市"},{ID:"340",PID:"31",ZipCode:"843300",CityName:"阿拉尔市"},{ID:"341",PID:"31",ZipCode:"844000",CityName:"图木舒克市"},{ID:"342",PID:"31",ZipCode:"831300",CityName:"五家渠市"}],ProvinceName:"新疆维吾尔自治区",ID:"31"},{cities:[{ID:"343",PID:"32",ZipCode:"999077",CityName:"香港特别行政区"}],ProvinceName:"香港特别行政区",ID:"32"},{cities:[{ID:"344",PID:"33",ZipCode:"999078",CityName:"澳门特别行政区"}],ProvinceName:"澳门特别行政区",ID:"33"},{cities:[{ID:"345",PID:"34",ZipCode:"999079",CityName:"台湾省"}],ProvinceName:"台湾省",ID:"34"}];return{init:d}})
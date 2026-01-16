export interface HexagramYaoText {
  title: string;
  text: string;
}

export interface Hexagram {
  name: string;
  symbol: string;
  judgment: string;
  explanation: string;
  yaoText: HexagramYaoText[];
}

export interface YaoType {
  name: string;
  symbol: string;
  isYang: boolean;
  isMoving: boolean;
}

export const hexagramData: Record<string, Hexagram> = {
      "111111": {
                name: "乾为天",
                symbol: "☰",
                judgment: "元亨利贞。",
                explanation: "乾卦象征天，代表刚健、进取、创造。此卦大吉，表示事业亨通，但需坚守正道。君子应效法天道，自强不息，奋发向上。",
                yaoText: [
                    { title: "初九", text: "潜龙勿用。（时机未到，宜韬光养晦，积蓄力量）" },
                    { title: "九二", text: "见龙在田，利见大人。（崭露头角，可寻求贵人相助）" },
                    { title: "九三", text: "君子终日乾乾，夕惕若厉，无咎。（勤勉谨慎，方可无过）" },
                    { title: "九四", text: "或跃在渊，无咎。（进退有据，审时度势）" },
                    { title: "九五", text: "飞龙在天，利见大人。（大展宏图，事业巅峰）" },
                    { title: "上九", text: "亢龙有悔。（盛极必衰，宜知进退）" }
                ]
            },
            "000000": {
                name: "坤为地",
                symbol: "☷",
                judgment: "元亨，利牝马之贞。君子有攸往，先迷后得主，利。西南得朋，东北丧朋。安贞吉。",
                explanation: "坤卦象征地，代表柔顺、包容、承载。此卦宜顺势而为，不宜强出头。以柔克刚，厚德载物，顺从正道则吉。",
                yaoText: [
                    { title: "初六", text: "履霜，坚冰至。（见微知著，防患未然）" },
                    { title: "六二", text: "直方大，不习无不利。（正直方正，自然亨通）" },
                    { title: "六三", text: "含章可贞，或从王事，无成有终。（韬光养晦，辅佐他人）" },
                    { title: "六四", text: "括囊，无咎无誉。（谨言慎行，明哲保身）" },
                    { title: "六五", text: "黄裳，元吉。（居中守正，大吉大利）" },
                    { title: "上六", text: "龙战于野，其血玄黄。（阴阳相争，两败俱伤）" }
                ]
            },
            "100010": {
                name: "水雷屯",
                symbol: "☵☳",
                judgment: "元亨利贞，勿用有攸往，利建侯。",
                explanation: "屯卦象征初生，如草木破土而出，艰难但充满希望。创业维艰，宜稳扎稳打，不可冒进。",
                yaoText: [
                    { title: "初九", text: "磐桓，利居贞，利建侯。" },
                    { title: "六二", text: "屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。" },
                    { title: "六三", text: "即鹿无虞，惟入于林中，君子几不如舍，往吝。" },
                    { title: "六四", text: "乘马班如，求婚媾，往吉无不利。" },
                    { title: "九五", text: "屯其膏，小贞吉，大贞凶。" },
                    { title: "上六", text: "乘马班如，泣血涟如。" }
                ]
            },
            "010001": {
                name: "山水蒙",
                symbol: "☶☵",
                judgment: "亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。",
                explanation: "蒙卦象征启蒙教育，如山下有泉，清澈待引。宜虚心求教，不耻下问。",
                yaoText: [
                    { title: "初六", text: "发蒙，利用刑人，用说桎梏，以往吝。" },
                    { title: "九二", text: "包蒙吉，纳妇吉，子克家。" },
                    { title: "六三", text: "勿用取女，见金夫，不有躬，无攸利。" },
                    { title: "六四", text: "困蒙，吝。" },
                    { title: "六五", text: "童蒙，吉。" },
                    { title: "上九", text: "击蒙，不利为寇，利御寇。" }
                ]
            },
            "111010": {
                name: "水天需",
                symbol: "☵☰",
                judgment: "有孚，光亨，贞吉。利涉大川。",
                explanation: "需卦象征等待，云在天上，待时而雨。事情需要耐心等待时机成熟，不可操之过急。",
                yaoText: [
                    { title: "初九", text: "需于郊，利用恒，无咎。" },
                    { title: "九二", text: "需于沙，小有言，终吉。" },
                    { title: "九三", text: "需于泥，致寇至。" },
                    { title: "六四", text: "需于血，出自穴。" },
                    { title: "九五", text: "需于酒食，贞吉。" },
                    { title: "上六", text: "入于穴，有不速之客三人来，敬之终吉。" }
                ]
            },
            "010111": {
                name: "天水讼",
                symbol: "☰☵",
                judgment: "有孚窒惕，中吉，终凶。利见大人，不利涉大川。",
                explanation: "讼卦象征争讼，天水相违，上下不和。争讼之事宜适可而止，不可穷追猛打。",
                yaoText: [
                    { title: "初六", text: "不永所事，小有言，终吉。" },
                    { title: "九二", text: "不克讼，归而逋，其邑人三百户，无眚。" },
                    { title: "六三", text: "食旧德，贞厉，终吉，或从王事，无成。" },
                    { title: "九四", text: "不克讼，复即命，渝安贞，吉。" },
                    { title: "九五", text: "讼，元吉。" },
                    { title: "上九", text: "或锡之鞶带，终朝三褫之。" }
                ]
            },
            "010000": {
                name: "地水师",
                symbol: "☷☵",
                judgment: "贞，丈人吉，无咎。",
                explanation: "师卦象征军队、众人。地中有水，蓄势待发。行动需有正当理由，需德高望重之人领导。",
                yaoText: [
                    { title: "初六", text: "师出以律，否臧凶。" },
                    { title: "九二", text: "在师中吉，无咎，王三锡命。" },
                    { title: "六三", text: "师或舆尸，凶。" },
                    { title: "六四", text: "师左次，无咎。" },
                    { title: "六五", text: "田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。" },
                    { title: "上六", text: "大君有命，开国承家，小人勿用。" }
                ]
            },
            "000010": {
                name: "水地比",
                symbol: "☵☷",
                judgment: "吉。原筮元永贞，无咎。不宁方来，后夫凶。",
                explanation: "比卦象征亲近、辅佐。水在地上，相互依存。宜亲近贤人，团结合作。",
                yaoText: [
                    { title: "初六", text: "有孚比之，无咎。有孚盈缶，终来有它，吉。" },
                    { title: "六二", text: "比之自内，贞吉。" },
                    { title: "六三", text: "比之匪人。" },
                    { title: "六四", text: "外比之，贞吉。" },
                    { title: "九五", text: "显比，王用三驱，失前禽。邑人不诫，吉。" },
                    { title: "上六", text: "比之无首，凶。" }
                ]
            },
            "111011": {
                name: "风天小畜",
                symbol: "☴☰",
                judgment: "亨。密云不雨，自我西郊。",
                explanation: "小畜卦象征小有积蓄。风行天上，云气聚集但未成雨。力量尚小，宜继续积累。",
                yaoText: [
                    { title: "初九", text: "复自道，何其咎，吉。" },
                    { title: "九二", text: "牵复，吉。" },
                    { title: "九三", text: "舆说辐，夫妻反目。" },
                    { title: "六四", text: "有孚，血去惕出，无咎。" },
                    { title: "九五", text: "有孚挛如，富以其邻。" },
                    { title: "上九", text: "既雨既处，尚德载，妇贞厉。月几望，君子征凶。" }
                ]
            },
            "110111": {
                name: "天泽履",
                symbol: "☰☱",
                judgment: "履虎尾，不咥人，亨。",
                explanation: "履卦象征践行、礼仪。如踩虎尾而不被咬，需小心谨慎。行事应循规蹈矩。",
                yaoText: [
                    { title: "初九", text: "素履往，无咎。" },
                    { title: "九二", text: "履道坦坦，幽人贞吉。" },
                    { title: "六三", text: "眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。" },
                    { title: "九四", text: "履虎尾，愬愬终吉。" },
                    { title: "九五", text: "夬履，贞厉。" },
                    { title: "上九", text: "视履考祥，其旋元吉。" }
                ]
            },
            "111000": {
                name: "地天泰",
                symbol: "☷☰",
                judgment: "小往大来，吉亨。",
                explanation: "泰卦象征通泰、和谐。天地交感，阴阳和合，万物通泰。大吉之卦，但盛极必衰，宜居安思危。",
                yaoText: [
                    { title: "初九", text: "拔茅茹，以其汇，征吉。" },
                    { title: "九二", text: "包荒，用冯河，不遐遗，朋亡，得尚于中行。" },
                    { title: "九三", text: "无平不陂，无往不复。艰贞无咎。" },
                    { title: "六四", text: "翩翩不富，以其邻，不戒以孚。" },
                    { title: "六五", text: "帝乙归妹，以祉元吉。" },
                    { title: "上六", text: "城复于隍，勿用师。自邑告命，贞吝。" }
                ]
            },
            "000111": {
                name: "天地否",
                symbol: "☰☷",
                judgment: "否之匪人，不利君子贞，大往小来。",
                explanation: "否卦象征闭塞不通。天地不交，阴阳隔绝。时运不济，宜韬光养晦，等待时机转变。",
                yaoText: [
                    { title: "初六", text: "拔茅茹，以其汇，贞吉亨。" },
                    { title: "六二", text: "包承，小人吉，大人否亨。" },
                    { title: "六三", text: "包羞。" },
                    { title: "九四", text: "有命无咎，畴离祉。" },
                    { title: "九五", text: "休否，大人吉。其亡其亡，系于苞桑。" },
                    { title: "上九", text: "倾否，先否后喜。" }
                ]
            },
            "101111": {
                name: "天火同人",
                symbol: "☰☲",
                judgment: "同人于野，亨。利涉大川，利君子贞。",
                explanation: "同人卦象征志同道合。天与火同性上升，象征团结。宜广结善缘，与人合作。",
                yaoText: [
                    { title: "初九", text: "同人于门，无咎。" },
                    { title: "六二", text: "同人于宗，吝。" },
                    { title: "九三", text: "伏戎于莽，升其高陵，三岁不兴。" },
                    { title: "九四", text: "乘其墉，弗克攻，吉。" },
                    { title: "九五", text: "同人，先号啕而后笑，大师克相遇。" },
                    { title: "上九", text: "同人于郊，无悔。" }
                ]
            },
            "111101": {
                name: "火天大有",
                symbol: "☲☰",
                judgment: "元亨。",
                explanation: "大有卦象征丰收、富有。火在天上，光明普照。大吉之卦，事业兴旺，财运亨通。",
                yaoText: [
                    { title: "初九", text: "无交害，匪咎，艰则无咎。" },
                    { title: "九二", text: "大车以载，有攸往，无咎。" },
                    { title: "九三", text: "公用亨于天子，小人弗克。" },
                    { title: "九四", text: "匪其彭，无咎。" },
                    { title: "六五", text: "厥孚交如，威如，吉。" },
                    { title: "上九", text: "自天祐之，吉无不利。" }
                ]
            },
            "001000": {
                name: "地山谦",
                symbol: "☷☶",
                judgment: "亨，君子有终。",
                explanation: "谦卦象征谦虚。山在地下，高而不显。谦虚使人进步，此卦大吉，谦逊者终有善报。",
                yaoText: [
                    { title: "初六", text: "谦谦君子，用涉大川，吉。" },
                    { title: "六二", text: "鸣谦，贞吉。" },
                    { title: "九三", text: "劳谦，君子有终，吉。" },
                    { title: "六四", text: "无不利，撝谦。" },
                    { title: "六五", text: "不富以其邻，利用侵伐，无不利。" },
                    { title: "上六", text: "鸣谦，利用行师，征邑国。" }
                ]
            },
            "000100": {
                name: "雷地豫",
                symbol: "☳☷",
                judgment: "利建侯行师。",
                explanation: "豫卦象征欢乐、安逸。雷出地上，万物欣豫。宜把握时机，有所作为。",
                yaoText: [
                    { title: "初六", text: "鸣豫，凶。" },
                    { title: "六二", text: "介于石，不终日，贞吉。" },
                    { title: "六三", text: "盱豫，悔。迟有悔。" },
                    { title: "九四", text: "由豫，大有得。勿疑。朋盍簪。" },
                    { title: "六五", text: "贞疾，恒不死。" },
                    { title: "上六", text: "冥豫，成有渝，无咎。" }
                ]
            },
            "100110": {
                name: "泽雷随",
                symbol: "☱☳",
                judgment: "元亨利贞，无咎。",
                explanation: "随卦象征跟随、顺从。泽中有雷，随时而动。宜顺应时势，择善而从。",
                yaoText: [
                    { title: "初九", text: "官有渝，贞吉。出门交有功。" },
                    { title: "六二", text: "系小子，失丈夫。" },
                    { title: "六三", text: "系丈夫，失小子。随有求得，利居贞。" },
                    { title: "九四", text: "随有获，贞凶。有孚在道，以明，何咎。" },
                    { title: "九五", text: "孚于嘉，吉。" },
                    { title: "上六", text: "拘系之，乃从维之。王用亨于西山。" }
                ]
            },
            "011001": {
                name: "山风蛊",
                symbol: "☶☴",
                judgment: "元亨，利涉大川。先甲三日，后甲三日。",
                explanation: "蛊卦象征整治弊病。山下有风，万物败坏。事情已经败坏，需要整顿革新。",
                yaoText: [
                    { title: "初六", text: "干父之蛊，有子，考无咎，厉终吉。" },
                    { title: "九二", text: "干母之蛊，不可贞。" },
                    { title: "九三", text: "干父之蛊，小有悔，无大咎。" },
                    { title: "六四", text: "裕父之蛊，往见吝。" },
                    { title: "六五", text: "干父之蛊，用誉。" },
                    { title: "上九", text: "不事王侯，高尚其事。" }
                ]
            },
            "110000": {
                name: "地泽临",
                symbol: "☷☱",
                judgment: "元亨利贞。至于八月有凶。",
                explanation: "临卦象征亲临、监督。地上有泽，居高临下。宜亲力亲为，关怀下属。",
                yaoText: [
                    { title: "初九", text: "咸临，贞吉。" },
                    { title: "九二", text: "咸临，吉无不利。" },
                    { title: "六三", text: "甘临，无攸利。既忧之，无咎。" },
                    { title: "六四", text: "至临，无咎。" },
                    { title: "六五", text: "知临，大君之宜，吉。" },
                    { title: "上六", text: "敦临，吉，无咎。" }
                ]
            },
            "000011": {
                name: "风地观",
                symbol: "☴☷",
                judgment: "盥而不荐，有孚颙若。",
                explanation: "观卦象征观察、示范。风行地上，遍观万物。宜观察形势，以身作则。",
                yaoText: [
                    { title: "初六", text: "童观，小人无咎，君子吝。" },
                    { title: "六二", text: "窥观，利女贞。" },
                    { title: "六三", text: "观我生，进退。" },
                    { title: "六四", text: "观国之光，利用宾于王。" },
                    { title: "九五", text: "观我生，君子无咎。" },
                    { title: "上九", text: "观其生，君子无咎。" }
                ]
            },
            "100101": {
                name: "火雷噬嗑",
                symbol: "☲☳",
                judgment: "亨。利用狱。",
                explanation: "噬嗑卦象征咬合、刑罚。口中有物，必须咬碎。宜果断处理障碍，明辨是非。",
                yaoText: [
                    { title: "初九", text: "屦校灭趾，无咎。" },
                    { title: "六二", text: "噬肤灭鼻，无咎。" },
                    { title: "六三", text: "噬腊肉，遇毒；小吝，无咎。" },
                    { title: "九四", text: "噬干胏，得金矢，利艰贞，吉。" },
                    { title: "六五", text: "噬干肉，得黄金，贞厉，无咎。" },
                    { title: "上九", text: "何校灭耳，凶。" }
                ]
            },
            "101001": {
                name: "山火贲",
                symbol: "☶☲",
                judgment: "亨。小利有攸往。",
                explanation: "贲卦象征文饰、装饰。山下有火，光彩照人。宜注重外表修饰，但不可华而不实。",
                yaoText: [
                    { title: "初九", text: "贲其趾，舍车而徒。" },
                    { title: "六二", text: "贲其须。" },
                    { title: "九三", text: "贲如濡如，永贞吉。" },
                    { title: "六四", text: "贲如皤如，白马翰如。匪寇婚媾。" },
                    { title: "六五", text: "贲于丘园，束帛戋戋，吝，终吉。" },
                    { title: "上九", text: "白贲，无咎。" }
                ]
            },
            "000001": {
                name: "山地剥",
                symbol: "☶☷",
                judgment: "不利有攸往。",
                explanation: "剥卦象征剥落、衰败。山附于地，根基动摇。时运衰退，宜静守待时。",
                yaoText: [
                    { title: "初六", text: "剥床以足，蔑贞凶。" },
                    { title: "六二", text: "剥床以辨，蔑贞凶。" },
                    { title: "六三", text: "剥之，无咎。" },
                    { title: "六四", text: "剥床以肤，凶。" },
                    { title: "六五", text: "贯鱼，以宫人宠，无不利。" },
                    { title: "上九", text: "硕果不食，君子得舆，小人剥庐。" }
                ]
            },
            "100000": {
                name: "地雷复",
                symbol: "☷☳",
                judgment: "亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。",
                explanation: "复卦象征回复、复兴。雷在地下，阳气初生。否极泰来，一阳来复。",
                yaoText: [
                    { title: "初九", text: "不远复，无祗悔，元吉。" },
                    { title: "六二", text: "休复，吉。" },
                    { title: "六三", text: "频复，厉无咎。" },
                    { title: "六四", text: "中行独复。" },
                    { title: "六五", text: "敦复，无悔。" },
                    { title: "上六", text: "迷复，凶，有灾眚。" }
                ]
            },
            "100111": {
                name: "天雷无妄",
                symbol: "☰☳",
                judgment: "元亨利贞。其匪正有眚，不利有攸往。",
                explanation: "无妄卦象征真实无妄。天下雷行，万物自然。宜顺其自然，不可妄为。",
                yaoText: [
                    { title: "初九", text: "无妄，往吉。" },
                    { title: "六二", text: "不耕获，不菑畲，则利有攸往。" },
                    { title: "六三", text: "无妄之灾，或系之牛，行人之得，邑人之灾。" },
                    { title: "九四", text: "可贞，无咎。" },
                    { title: "九五", text: "无妄之疾，勿药有喜。" },
                    { title: "上九", text: "无妄，行有眚，无攸利。" }
                ]
            },
            "111001": {
                name: "山天大畜",
                symbol: "☶☰",
                judgment: "利贞，不家食吉，利涉大川。",
                explanation: "大畜卦象征大的积蓄。天在山中，蓄养贤才。宜积蓄力量，培养人才。",
                yaoText: [
                    { title: "初九", text: "有厉利已。" },
                    { title: "九二", text: "舆说辐。" },
                    { title: "九三", text: "良马逐，利艰贞。曰闲舆卫，利有攸往。" },
                    { title: "六四", text: "童牛之牿，元吉。" },
                    { title: "六五", text: "豮豕之牙，吉。" },
                    { title: "上九", text: "何天之衢，亨。" }
                ]
            },
            "100001": {
                name: "山雷颐",
                symbol: "☶☳",
                judgment: "贞吉。观颐，自求口实。",
                explanation: "颐卦象征颐养、饮食。山下有雷，口中咀嚼。宜注重养生，谨慎言语。",
                yaoText: [
                    { title: "初九", text: "舍尔灵龟，观我朵颐，凶。" },
                    { title: "六二", text: "颠颐，拂经，于丘颐，征凶。" },
                    { title: "六三", text: "拂颐，贞凶，十年勿用。无攸利。" },
                    { title: "六四", text: "颠颐吉，虎视眈眈，其欲逐逐，无咎。" },
                    { title: "六五", text: "拂经，居贞吉，不可涉大川。" },
                    { title: "上九", text: "由颐，厉吉，利涉大川。" }
                ]
            },
            "011110": {
                name: "泽风大过",
                symbol: "☱☴",
                judgment: "栋桡，利有攸往，亨。",
                explanation: "大过卦象征大的过度。泽灭木，栋梁弯曲。事情过度，宜当机立断。",
                yaoText: [
                    { title: "初六", text: "藉用白茅，无咎。" },
                    { title: "九二", text: "枯杨生稊，老夫得其女妻，无不利。" },
                    { title: "九三", text: "栋桡，凶。" },
                    { title: "九四", text: "栋隆，吉；有它吝。" },
                    { title: "九五", text: "枯杨生华，老妇得士夫，无咎无誉。" },
                    { title: "上六", text: "过涉灭顶，凶，无咎。" }
                ]
            },
            "010010": {
                name: "坎为水",
                symbol: "☵",
                judgment: "习坎，有孚，维心亨，行有尚。",
                explanation: "坎卦象征险陷、水。水流不息，重重险阻。处境艰难，但坚持不懈，终能度过。",
                yaoText: [
                    { title: "初六", text: "习坎，入于坎窞，凶。" },
                    { title: "九二", text: "坎有险，求小得。" },
                    { title: "六三", text: "来之坎坎，险且枕，入于坎窞，勿用。" },
                    { title: "六四", text: "樽酒簋贰，用缶，纳约自牖，终无咎。" },
                    { title: "九五", text: "坎不盈，祗既平，无咎。" },
                    { title: "上六", text: "系用徽纆，寘于丛棘，三岁不得，凶。" }
                ]
            },
            "101101": {
                name: "离为火",
                symbol: "☲",
                judgment: "利贞，亨。畜牝牛，吉。",
                explanation: "离卦象征附丽、光明。火焰明亮，依附燃料。宜依附正道，发挥光明。",
                yaoText: [
                    { title: "初九", text: "履错然，敬之无咎。" },
                    { title: "六二", text: "黄离，元吉。" },
                    { title: "九三", text: "日昃之离，不鼓缶而歌，则大耋之嗟，凶。" },
                    { title: "九四", text: "突如其来如，焚如，死如，弃如。" },
                    { title: "六五", text: "出涕沱若，戚嗟若，吉。" },
                    { title: "上九", text: "王用出征，有嘉折首，获匪其丑，无咎。" }
                ]
            },
            "001110": {
                name: "泽山咸",
                symbol: "☱☶",
                judgment: "亨，利贞，取女吉。",
                explanation: "咸卦象征感应、交感。山上有泽，阴阳交感。宜以诚感人，婚姻感情大吉。",
                yaoText: [
                    { title: "初六", text: "咸其拇。" },
                    { title: "六二", text: "咸其腓，凶，居吉。" },
                    { title: "九三", text: "咸其股，执其随，往吝。" },
                    { title: "九四", text: "贞吉悔亡，憧憧往来，朋从尔思。" },
                    { title: "九五", text: "咸其脢，无悔。" },
                    { title: "上六", text: "咸其辅颊舌。" }
                ]
            },
            "011100": {
                name: "雷风恒",
                symbol: "☳☴",
                judgment: "亨，无咎，利贞，利有攸往。",
                explanation: "恒卦象征恒久、持久。雷风相与，长久不息。宜持之以恒，坚守正道。",
                yaoText: [
                    { title: "初六", text: "浚恒，贞凶，无攸利。" },
                    { title: "九二", text: "悔亡。" },
                    { title: "九三", text: "不恒其德，或承之羞，贞吝。" },
                    { title: "九四", text: "田无禽。" },
                    { title: "六五", text: "恒其德，贞，妇人吉，夫子凶。" },
                    { title: "上六", text: "振恒，凶。" }
                ]
            },
            "001111": {
                name: "天山遁",
                symbol: "☰☶",
                judgment: "亨，小利贞。",
                explanation: "遁卦象征退避、隐遁。天下有山，君子远小人。时机不利，宜暂时退避。",
                yaoText: [
                    { title: "初六", text: "遁尾，厉，勿用有攸往。" },
                    { title: "六二", text: "执之用黄牛之革，莫之胜说。" },
                    { title: "九三", text: "系遁，有疾厉，畜臣妾吉。" },
                    { title: "九四", text: "好遁，君子吉，小人否。" },
                    { title: "九五", text: "嘉遁，贞吉。" },
                    { title: "上九", text: "肥遁，无不利。" }
                ]
            },
            "111100": {
                name: "雷天大壮",
                symbol: "☳☰",
                judgment: "利贞。",
                explanation: "大壮卦象征强盛、壮大。雷在天上，声威远震。力量强盛，但需守正道。",
                yaoText: [
                    { title: "初九", text: "壮于趾，征凶，有孚。" },
                    { title: "九二", text: "贞吉。" },
                    { title: "九三", text: "小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。" },
                    { title: "九四", text: "贞吉悔亡，藩决不羸，壮于大舆之輹。" },
                    { title: "六五", text: "丧羊于易，无悔。" },
                    { title: "上六", text: "羝羊触藩，不能退，不能遂，无攸利，艰则吉。" }
                ]
            },
            "000101": {
                name: "火地晋",
                symbol: "☲☷",
                judgment: "康侯用锡马蕃庶，昼日三接。",
                explanation: "晋卦象征晋升、进步。火出地上，光明上进。事业上升，宜积极进取。",
                yaoText: [
                    { title: "初六", text: "晋如，摧如，贞吉。罔孚，裕无咎。" },
                    { title: "六二", text: "晋如，愁如，贞吉。受兹介福，于其王母。" },
                    { title: "六三", text: "众允，悔亡。" },
                    { title: "九四", text: "晋如鼫鼠，贞厉。" },
                    { title: "六五", text: "悔亡，失得勿恤，往吉无不利。" },
                    { title: "上九", text: "晋其角，维用伐邑，厉吉无咎，贞吝。" }
                ]
            },
            "101000": {
                name: "地火明夷",
                symbol: "☷☲",
                judgment: "利艰贞。",
                explanation: "明夷卦象征光明受损。火入地中，光明隐没。处境艰难，宜韬光养晦。",
                yaoText: [
                    { title: "初九", text: "明夷于飞，垂其翼。君子于行，三日不食。" },
                    { title: "六二", text: "明夷，夷于左股，用拯马壮，吉。" },
                    { title: "九三", text: "明夷于南狩，得其大首，不可疾贞。" },
                    { title: "六四", text: "入于左腹，获明夷之心，出于门庭。" },
                    { title: "六五", text: "箕子之明夷，利贞。" },
                    { title: "上六", text: "不明晦，初登于天，后入于地。" }
                ]
            },
            "101011": {
                name: "风火家人",
                symbol: "☴☲",
                judgment: "利女贞。",
                explanation: "家人卦象征家庭。风自火出，由内及外。宜齐家治国，先正己身，家和万事兴。",
                yaoText: [
                    { title: "初九", text: "闲有家，悔亡。" },
                    { title: "六二", text: "无攸遂，在中馈，贞吉。" },
                    { title: "九三", text: "家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。" },
                    { title: "六四", text: "富家，大吉。" },
                    { title: "九五", text: "王假有家，勿恤吉。" },
                    { title: "上九", text: "有孚威如，终吉。" }
                ]
            },
            "110101": {
                name: "火泽睽",
                symbol: "☲☱",
                judgment: "小事吉。",
                explanation: "睽卦象征乖离、背离。火炎上，泽润下，方向相反。意见分歧，宜求同存异。",
                yaoText: [
                    { title: "初九", text: "悔亡，丧马勿逐，自复；见恶人无咎。" },
                    { title: "九二", text: "遇主于巷，无咎。" },
                    { title: "六三", text: "见舆曳，其牛掣，其人天且劓，无初有终。" },
                    { title: "九四", text: "睽孤，遇元夫，交孚，厉无咎。" },
                    { title: "六五", text: "悔亡，厥宗噬肤，往何咎。" },
                    { title: "上九", text: "睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。" }
                ]
            },
            "001010": {
                name: "水山蹇",
                symbol: "☵☶",
                judgment: "利西南，不利东北；利见大人，贞吉。",
                explanation: "蹇卦象征艰难、跛行。山上有水，行走艰难。前路坎坷，宜反省自身，寻求帮助。",
                yaoText: [
                    { title: "初六", text: "往蹇，来誉。" },
                    { title: "六二", text: "王臣蹇蹇，匪躬之故。" },
                    { title: "九三", text: "往蹇来反。" },
                    { title: "六四", text: "往蹇来连。" },
                    { title: "九五", text: "大蹇朋来。" },
                    { title: "上六", text: "往蹇来硕，吉；利见大人。" }
                ]
            },
            "010100": {
                name: "雷水解",
                symbol: "☳☵",
                judgment: "利西南，无所往，其来复吉。有攸往，夙吉。",
                explanation: "解卦象征解除、缓解。雷雨交作，万物舒解。困难即将解除，宜把握时机。",
                yaoText: [
                    { title: "初六", text: "无咎。" },
                    { title: "九二", text: "田获三狐，得黄矢，贞吉。" },
                    { title: "六三", text: "负且乘，致寇至，贞吝。" },
                    { title: "九四", text: "解而拇，朋至斯孚。" },
                    { title: "六五", text: "君子维有解，吉；有孚于小人。" },
                    { title: "上六", text: "公用射隼于高墉之上，获之，无不利。" }
                ]
            },
            "110001": {
                name: "山泽损",
                symbol: "☶☱",
                judgment: "有孚，元吉，无咎，可贞，利有攸往。",
                explanation: "损卦象征减损、损失。山下有泽，损下益上。宜减损私欲，克己奉公。",
                yaoText: [
                    { title: "初九", text: "已事遄往，无咎，酌损之。" },
                    { title: "九二", text: "利贞，征凶，弗损益之。" },
                    { title: "六三", text: "三人行，则损一人；一人行，则得其友。" },
                    { title: "六四", text: "损其疾，使遄有喜，无咎。" },
                    { title: "六五", text: "或益之十朋之龟弗克违，元吉。" },
                    { title: "上九", text: "弗损益之，无咎，贞吉，利有攸往，得臣无家。" }
                ]
            },
            "100011": {
                name: "风雷益",
                symbol: "☴☳",
                judgment: "利有攸往，利涉大川。",
                explanation: "益卦象征增益、利益。风雷相助，万物受益。宜积极进取，利人利己。",
                yaoText: [
                    { title: "初九", text: "利用为大作，元吉，无咎。" },
                    { title: "六二", text: "或益之十朋之龟弗克违，永贞吉。王用享于帝，吉。" },
                    { title: "六三", text: "益之用凶事，无咎。有孚中行，告公用圭。" },
                    { title: "六四", text: "中行，告公从。利用为依迁国。" },
                    { title: "九五", text: "有孚惠心，勿问元吉。有孚惠我德。" },
                    { title: "上九", text: "莫益之，或击之，立心勿恒，凶。" }
                ]
            },
            "111110": {
                name: "泽天夬",
                symbol: "☱☰",
                judgment: "扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。",
                explanation: "夬卦象征决断、决裂。泽上于天，水将溃决。宜当机立断，除恶务尽。",
                yaoText: [
                    { title: "初九", text: "壮于前趾，往不胜为咎。" },
                    { title: "九二", text: "惕号，莫夜有戎，勿恤。" },
                    { title: "九三", text: "壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。" },
                    { title: "九四", text: "臀无肤，其行次且。牵羊悔亡，闻言不信。" },
                    { title: "九五", text: "苋陆夬夬，中行无咎。" },
                    { title: "上六", text: "无号，终有凶。" }
                ]
            },
            "011111": {
                name: "天风姤",
                symbol: "☰☴",
                judgment: "女壮，勿用取女。",
                explanation: "姤卦象征相遇、邂逅。天下有风，无处不遇。意外相遇，宜谨慎对待。",
                yaoText: [
                    { title: "初六", text: "系于金柅，贞吉，有攸往，见凶。" },
                    { title: "九二", text: "包有鱼，无咎，不利宾。" },
                    { title: "九三", text: "臀无肤，其行次且，厉，无大咎。" },
                    { title: "九四", text: "包无鱼，起凶。" },
                    { title: "九五", text: "以杞包瓜，含章，有陨自天。" },
                    { title: "上九", text: "姤其角，吝，无咎。" }
                ]
            },
            "000110": {
                name: "泽地萃",
                symbol: "☱☷",
                judgment: "亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。",
                explanation: "萃卦象征聚集、荟萃。泽上于地，水聚成泽。宜聚集人才，团结力量。",
                yaoText: [
                    { title: "初六", text: "有孚不终，乃乱乃萃，若号一握为笑，勿恤，往无咎。" },
                    { title: "六二", text: "引吉，无咎，孚乃利用禴。" },
                    { title: "六三", text: "萃如，嗟如，无攸利，往无咎，小吝。" },
                    { title: "九四", text: "大吉，无咎。" },
                    { title: "九五", text: "萃有位，无咎。匪孚，元永贞，悔亡。" },
                    { title: "上六", text: "赍咨涕洟，无咎。" }
                ]
            },
            "011000": {
                name: "地风升",
                symbol: "☷☴",
                judgment: "元亨，用见大人，勿恤，南征吉。",
                explanation: "升卦象征上升、晋升。地中生木，向上生长。事业上升，宜积极进取。",
                yaoText: [
                    { title: "初六", text: "允升，大吉。" },
                    { title: "九二", text: "孚乃利用禴，无咎。" },
                    { title: "九三", text: "升虚邑。" },
                    { title: "六四", text: "王用亨于岐山，吉，无咎。" },
                    { title: "六五", text: "贞吉，升阶。" },
                    { title: "上六", text: "冥升，利于不息之贞。" }
                ]
            },
            "010110": {
                name: "泽水困",
                symbol: "☱☵",
                judgment: "亨，贞，大人吉，无咎，有言不信。",
                explanation: "困卦象征困顿、穷困。泽无水，困顿之象。处境艰难，宜坚守正道。",
                yaoText: [
                    { title: "初六", text: "臀困于株木，入于幽谷，三岁不觌。" },
                    { title: "九二", text: "困于酒食，朱绂方来，利用享祀，征凶，无咎。" },
                    { title: "六三", text: "困于石，据于蒺藜，入于其宫，不见其妻，凶。" },
                    { title: "九四", text: "来徐徐，困于金车，吝，有终。" },
                    { title: "九五", text: "劓刖，困于赤绂，乃徐有说，利用祭祀。" },
                    { title: "上六", text: "困于葛藟，于臲卼，曰动悔。有悔，征吉。" }
                ]
            },
            "011010": {
                name: "水风井",
                symbol: "☵☴",
                judgment: "改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。",
                explanation: "井卦象征水井、养人。木入水中，汲水而上。宜修身养德，泽被众人。",
                yaoText: [
                    { title: "初六", text: "井泥不食，旧井无禽。" },
                    { title: "九二", text: "井谷射鲋，瓮敝漏。" },
                    { title: "九三", text: "井渫不食，为我心恻，可用汲，王明，并受其福。" },
                    { title: "六四", text: "井甃，无咎。" },
                    { title: "九五", text: "井冽，寒泉食。" },
                    { title: "上六", text: "井收勿幕，有孚元吉。" }
                ]
            },
            "101110": {
                name: "泽火革",
                symbol: "☱☲",
                judgment: "己日乃孚，元亨利贞，悔亡。",
                explanation: "革卦象征变革、革命。泽中有火，水火相息。宜顺应时势，推行变革。",
                yaoText: [
                    { title: "初九", text: "巩用黄牛之革。" },
                    { title: "六二", text: "己日乃革之，征吉，无咎。" },
                    { title: "九三", text: "征凶，贞厉，革言三就，有孚。" },
                    { title: "九四", text: "悔亡，有孚改命，吉。" },
                    { title: "九五", text: "大人虎变，未占有孚。" },
                    { title: "上六", text: "君子豹变，小人革面，征凶，居贞吉。" }
                ]
            },
            "011101": {
                name: "火风鼎",
                symbol: "☲☴",
                judgment: "元吉，亨。",
                explanation: "鼎卦象征鼎器、革新。木上有火，烹饪之象。宜革故鼎新，培养人才。",
                yaoText: [
                    { title: "初六", text: "鼎颠趾，利出否，得妾以其子，无咎。" },
                    { title: "九二", text: "鼎有实，我仇有疾，不我能即，吉。" },
                    { title: "九三", text: "鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。" },
                    { title: "九四", text: "鼎折足，覆公餗，其形渥，凶。" },
                    { title: "六五", text: "鼎黄耳金铉，利贞。" },
                    { title: "上九", text: "鼎玉铉，大吉，无不利。" }
                ]
            },
            "100100": {
                name: "震为雷",
                symbol: "☳",
                judgment: "亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。",
                explanation: "震卦象征雷、震动。雷声震动，万物惊醒。宜警醒自省，居安思危。",
                yaoText: [
                    { title: "初九", text: "震来虩虩，后笑言哑哑，吉。" },
                    { title: "六二", text: "震来厉，亿丧贝，跻于九陵，勿逐，七日得。" },
                    { title: "六三", text: "震苏苏，震行无眚。" },
                    { title: "九四", text: "震遂泥。" },
                    { title: "六五", text: "震往来厉，亿无丧，有事。" },
                    { title: "上六", text: "震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。" }
                ]
            },
            "001001": {
                name: "艮为山",
                symbol: "☶",
                judgment: "艮其背，不获其身，行其庭，不见其人，无咎。",
                explanation: "艮卦象征山、止。两山重叠，止而又止。宜适可而止，知止不殆。",
                yaoText: [
                    { title: "初六", text: "艮其趾，无咎，利永贞。" },
                    { title: "六二", text: "艮其腓，不拯其随，其心不快。" },
                    { title: "九三", text: "艮其限，列其夤，厉薰心。" },
                    { title: "六四", text: "艮其身，无咎。" },
                    { title: "六五", text: "艮其辅，言有序，悔亡。" },
                    { title: "上九", text: "敦艮，吉。" }
                ]
            },
            "001011": {
                name: "风山渐",
                symbol: "☴☶",
                judgment: "女归吉，利贞。",
                explanation: "渐卦象征渐进、循序。山上有木，渐渐生长。宜循序渐进，不可急躁。",
                yaoText: [
                    { title: "初六", text: "鸿渐于干，小子厉，有言，无咎。" },
                    { title: "六二", text: "鸿渐于磐，饮食衎衎，吉。" },
                    { title: "九三", text: "鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。" },
                    { title: "六四", text: "鸿渐于木，或得其桷，无咎。" },
                    { title: "九五", text: "鸿渐于陵，妇三岁不孕，终莫之胜，吉。" },
                    { title: "上九", text: "鸿渐于陆，其羽可用为仪，吉。" }
                ]
            },
            "110100": {
                name: "雷泽归妹",
                symbol: "☳☱",
                judgment: "征凶，无攸利。",
                explanation: "归妹卦象征少女出嫁。泽上有雷，少女从兄。婚姻之事需谨慎，不可轻率。",
                yaoText: [
                    { title: "初九", text: "归妹以娣，跛能履，征吉。" },
                    { title: "九二", text: "眇能视，利幽人之贞。" },
                    { title: "六三", text: "归妹以须，反归以娣。" },
                    { title: "九四", text: "归妹愆期，迟归有时。" },
                    { title: "六五", text: "帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉。" },
                    { title: "上六", text: "女承筐无实，士刲羊无血，无攸利。" }
                ]
            },
            "101100": {
                name: "雷火丰",
                symbol: "☳☲",
                judgment: "亨，王假之，勿忧，宜日中。",
                explanation: "丰卦象征丰盛、盛大。雷电皆至，光明盛大。事业鼎盛，但盛极必衰。",
                yaoText: [
                    { title: "初九", text: "遇其配主，虽旬无咎，往有尚。" },
                    { title: "六二", text: "丰其蔀，日中见斗，往得疑疾，有孚发若，吉。" },
                    { title: "九三", text: "丰其沛，日中见沬，折其右肱，无咎。" },
                    { title: "九四", text: "丰其蔀，日中见斗，遇其夷主，吉。" },
                    { title: "六五", text: "来章，有庆誉，吉。" },
                    { title: "上六", text: "丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。" }
                ]
            },
            "001101": {
                name: "火山旅",
                symbol: "☲☶",
                judgment: "小亨，旅贞吉。",
                explanation: "旅卦象征旅行、羁旅。山上有火，行旅之象。宜谨慎行事，不可久留。",
                yaoText: [
                    { title: "初六", text: "旅琐琐，斯其所取灾。" },
                    { title: "六二", text: "旅即次，怀其资，得童仆贞。" },
                    { title: "九三", text: "旅焚其次，丧其童仆，贞厉。" },
                    { title: "九四", text: "旅于处，得其资斧，我心不快。" },
                    { title: "六五", text: "射雉一矢亡，终以誉命。" },
                    { title: "上九", text: "鸟焚其巢，旅人先笑后号啕。丧牛于易，凶。" }
                ]
            },
            "011011": {
                name: "巽为风",
                symbol: "☴",
                judgment: "小亨，利攸往，利见大人。",
                explanation: "巽卦象征风、顺从。风行草偃，无孔不入。宜顺势而为，柔顺谦逊。",
                yaoText: [
                    { title: "初六", text: "进退，利武人之贞。" },
                    { title: "九二", text: "巽在床下，用史巫纷若，吉无咎。" },
                    { title: "九三", text: "频巽，吝。" },
                    { title: "六四", text: "悔亡，田获三品。" },
                    { title: "九五", text: "贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。" },
                    { title: "上九", text: "巽在床下，丧其资斧，贞凶。" }
                ]
            },
            "110110": {
                name: "兑为泽",
                symbol: "☱",
                judgment: "亨，利贞。",
                explanation: "兑卦象征泽、喜悦。两泽相连，互相滋润。宜和悦待人，广结善缘。",
                yaoText: [
                    { title: "初九", text: "和兑，吉。" },
                    { title: "九二", text: "孚兑，吉，悔亡。" },
                    { title: "六三", text: "来兑，凶。" },
                    { title: "九四", text: "商兑未宁，介疾有喜。" },
                    { title: "九五", text: "孚于剥，有厉。" },
                    { title: "上六", text: "引兑。" }
                ]
            },
            "010011": {
                name: "风水涣",
                symbol: "☴☵",
                judgment: "亨，王假有庙，利涉大川，利贞。",
                explanation: "涣卦象征涣散、离散。风行水上，涣散之象。宜凝聚人心，化解分歧。",
                yaoText: [
                    { title: "初六", text: "用拯马壮，吉。" },
                    { title: "九二", text: "涣奔其机，悔亡。" },
                    { title: "六三", text: "涣其躬，无悔。" },
                    { title: "六四", text: "涣其群，元吉。涣有丘，匪夷所思。" },
                    { title: "九五", text: "涣汗其大号，涣王居，无咎。" },
                    { title: "上九", text: "涣其血，去逖出，无咎。" }
                ]
            },
            "110010": {
                name: "水泽节",
                symbol: "☵☱",
                judgment: "亨，苦节不可贞。",
                explanation: "节卦象征节制、节约。泽上有水，节制之象。宜适度节制，不可过度。",
                yaoText: [
                    { title: "初九", text: "不出户庭，无咎。" },
                    { title: "九二", text: "不出门庭，凶。" },
                    { title: "六三", text: "不节若，则嗟若，无咎。" },
                    { title: "六四", text: "安节，亨。" },
                    { title: "九五", text: "甘节，吉；往有尚。" },
                    { title: "上六", text: "苦节，贞凶，悔亡。" }
                ]
            },
            "110011": {
                name: "风泽中孚",
                symbol: "☴☱",
                judgment: "豚鱼吉，利涉大川，利贞。",
                explanation: "中孚卦象征诚信、信任。风行泽上，诚信感人。宜以诚待人，言而有信。",
                yaoText: [
                    { title: "初九", text: "虞吉，有它不燕。" },
                    { title: "九二", text: "鸣鹤在阴，其子和之，我有好爵，吾与尔靡之。" },
                    { title: "六三", text: "得敌，或鼓或罢，或泣或歌。" },
                    { title: "六四", text: "月几望，马匹亡，无咎。" },
                    { title: "九五", text: "有孚挛如，无咎。" },
                    { title: "上九", text: "翰音登于天，贞凶。" }
                ]
            },
            "001100": {
                name: "雷山小过",
                symbol: "☳☶",
                judgment: "亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。",
                explanation: "小过卦象征小有过越。山上有雷，小过之象。宜谨小慎微，小事可为，大事不宜。",
                yaoText: [
                    { title: "初六", text: "飞鸟以凶。" },
                    { title: "六二", text: "过其祖，遇其妣；不及其君，遇其臣；无咎。" },
                    { title: "九三", text: "弗过防之，从或戕之，凶。" },
                    { title: "九四", text: "无咎，弗过遇之。往厉必戒，勿用永贞。" },
                    { title: "六五", text: "密云不雨，自我西郊，公弋取彼在穴。" },
                    { title: "上六", text: "弗遇过之，飞鸟离之，凶，是谓灾眚。" }
                ]
            },
            "101010": {
                name: "水火既济",
                symbol: "☵☲",
                judgment: "亨，小利贞，初吉终乱。",
                explanation: "既济卦象征已经完成。水在火上，烹饪已成。事情已成，但需防微杜渐。",
                yaoText: [
                    { title: "初九", text: "曳其轮，濡其尾，无咎。" },
                    { title: "六二", text: "妇丧其茀，勿逐，七日得。" },
                    { title: "九三", text: "高宗伐鬼方，三年克之，小人勿用。" },
                    { title: "六四", text: "繻有衣袽，终日戒。" },
                    { title: "九五", text: "东邻杀牛，不如西邻之禴祭，实受其福。" },
                    { title: "上六", text: "濡其首，厉。" }
                ]
            },
            "010101": {
                name: "火水未济",
                symbol: "☲☵",
                judgment: "亨，小狐汔济，濡其尾，无攸利。",
                explanation: "未济卦象征尚未完成。火在水上，未能相交。事情尚未成功，宜继续努力。",
                yaoText: [
                    { title: "初六", text: "濡其尾，吝。" },
                    { title: "九二", text: "曳其轮，贞吉。" },
                    { title: "六三", text: "未济，征凶，利涉大川。" },
                    { title: "九四", text: "贞吉，悔亡，震用伐鬼方，三年有赏于大国。" },
                    { title: "六五", text: "贞吉，无悔，君子之光，有孚，吉。" },
                    { title: "上九", text: "有孚于饮酒，无咎，濡其首，有孚失是。" }
                ]
            }
};

export const yaoNumNames = ["一", "二", "三", "四", "五", "六"];
export const changeNames = ["一", "二", "三"];

export function getYaoType(value: number): YaoType {
  switch(value) {
    case 6: return { name: "老阴", symbol: "✕", isYang: false, isMoving: true };
    case 7: return { name: "少阳", symbol: "—", isYang: true, isMoving: false };
    case 8: return { name: "少阴", symbol: "- -", isYang: false, isMoving: false };
    case 9: return { name: "老阳", symbol: "○", isYang: true, isMoving: true };
    default: return { name: "未知", symbol: "?", isYang: false, isMoving: false };
  }
}

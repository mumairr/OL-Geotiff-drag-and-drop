// var mapView = new ol.View({
//     //center: ol.proj.fromLonLat([78.776032, 23.766398]),
//     //center: ol.proj.fromLonLat([72.92123646543907, 33.64379157486287]),
//     //center: ol.proj.fromLonLat([67.313404, 24.996132])//, 
//     //center: ol.proj.fromLonLat([72.91090103496741,33.62391183879668]),
//     center: ol.proj.fromLonLat([72.914191,33.634542]),

//     zoom: 15
// });
var urlParams = new URLSearchParams(window.location.search);
//console.log(urlParams.has('para')); // true

var para = '';

if(urlParams.has('para')){
    para = urlParams.get('para');
}
else{
    para = "";
}


var title = '';
var lyr = '';
var lat =0.0;
var lon = 0.0;
var extent = '';
var zooml = 6;
var featureInfoFlag = false;

switch (para) { 
	case 'agg': 
    title = "AirPort Green Garden";
    lyr = "gm:AGG_rec";
    extent = "33.570422, 72.875523";
    zooml =  15;
	break;

	case 'btrp1': 
    title = "Bahria Town P-1";
    lyr = "gm:BTR_P1";
    extent = "33.570285,73.116497";
    zooml =  15;
    break;

	case 'btrp2': 
    title = "Bahria Town P-2";
    lyr = "gm:BTR_P2";
    extent = "33.559518,73.119444";
    zooml =  15;
    break;
	case 'btrp3': 
    title = "Bahria Town P-3";
    lyr = "gm:BTR_P3";
    extent = "33.551505,73.115932";
    zooml =  15;
    break;
	case 'btrp4': 
    title = "Bahria Town P-4";
    lyr = "gm:BTR_P4";
    extent = "33.548829,73.131591";
    zooml =  15;
    break;
	case 'btrp5': 
    title = "Bahria Town P-5";
    lyr = "gm:BTR_P5";
    extent = "33.554288,73.131499";
    zooml =  15;
    break;
	case 'btrp6': 
    title = "Bahria Town P-6";
    lyr = "gm:BTR_P6";
    extent = "33.555383,73.137572";
    zooml =  15;
    break;
	case 'btrp7': 
    title = "Bahria Town P-7";
    lyr = "gm:BTR_P7";
    extent = "33.531424,73.118610";
    zooml =  15;
    break;

	case 'btrp8_secA': 
    title = "Bahria Town P-8 Sector A";
    lyr = "gm:BRT_Ph8_Sec-A_rec";
    extent = "33.498892, 73.062118";
    zooml =  15;
    break;
	
	case 'btrp8_secB': 
    title = "Bahria Town P-8 Sector B";
    lyr = "gm:BRT_Ph8_Sec-B_rec";
    extent = "33.496101, 73.071474";
    zooml =  15;
    break;
	
	case 'btrp8_secC': 
    title = "Bahria Town P-8 Sector C";
    lyr = "gm:BRT_Ph8_Sec-C_rec";
    extent = "33.492307, 73.074907";
    zooml =  15;
    break;
	
	case 'btrp8_secD': 
    title = "Bahria Town P-8 Sector D";
    lyr = "gm:BRT_Ph8_Sec-D";
    extent = "33.495823, 73.089554";
    zooml =  15;
    break;
	
	case 'btrp8_secE': 
    title = "Bahria Town P-8 Sector E";
    lyr = "gm:BRT_Ph8_Sec-E_rec";
    extent = "33.484980, 73.085410";
    zooml =  15;
    break;
	
	case 'btrp8_secE1': 
    title = "Bahria Town P-8 Sector E1";
    lyr = "gm:BRT_Ph8_Sec-E1_rec";
    extent = "33.484980, 73.085410";
    zooml =  15;
    break;
	
	case 'btrp8_secG': 
    title = "Bahria Town P-8 Sector G";
    lyr = "gm:BRT_Ph8_Sec-G";
    extent = "33.486435, 73.107801";
    zooml =  15;
    break;
	

	case 'btrp8_secH': 
    title = "Bahria Town P-8 Sector H";
    lyr = "gm:BRT_Ph8_Sec-H";
    extent = "33.491050, 73.063392";
    zooml =  15;
    break;

	case 'btrp8_secI': 
    title = "Bahria Town P-8 Sector I";
    lyr = "gm:BRT_Ph8_Sec-I";
    extent = "33.482233, 73.070839";
    zooml =  15;
    break;

	case 'btrp8_secJ': 
    title = "Bahria Town P-8 Sector J";
    lyr = "gm:BRT_Ph8_Sec-J";
    extent = "33.479443, 73.089931";
    zooml =  15;
    break;
	
	case 'btrp8_secK': 
    title = "Bahria Town P-8 SectorK";
    lyr = "gm:BRT_Ph8_Sec-K";
    extent = "33.465450, 73.066031";
    zooml =  15;
    break;
	
	case 'btrp8_secL': 
    title = "Bahria Town P-8 Sector L";
    lyr = "gm:BRT_Ph8_Sec-L";
    extent = "33.476435, 73.064174";
    zooml =  15;
    break;
	
	case 'btrp8_secM': 
    title = "Bahria Town P-8 Sector M";
    lyr = "gm:BRT_Ph8_Sec-M";
    extent = "33.480600, 73.077531";
    zooml =  15;
    break;

	case 'BP8_SV_ABB ': 
    title = "Bahria Town P-8 ABU BAKAR BLOCK";
    lyr = "gm:BP8_SV_ABB ";
    extent = "33.49681,73.10073";
    zooml =  15;
    break;

	case 'BP8_SV_BSN ': 
    title = "Bahria Town P-8 BAHRIA SPRING NORTH";
    lyr = "gm:BP8_SV_BSN ";
    extent = "33.52478,73.09101";
    zooml =  15;
    break;
	
	case 'BP8_SV_KB ': 
    title = "Bahria Town P-8 Khalid Block";
    lyr = "gm:BP8_SV_KB ";
    extent = "33.49860,73.11384";
    zooml =  15;
    break;
	
	case 'BP8_SV_RB ': 
    title = "Bahria Town P-8 Rafi Block";
    lyr = "gm:BP8_SV_RB ";
    extent = "33.50349,73.10200";
    zooml =  15;
    break;
	
	case 'BP8_SV_F45': 
    title = "Bahria Town P-8 SECTOR F-4&5";
    lyr = "gm:BP8_SV_F45 ";
    extent = "33.46710,73.09788";
    zooml =  15;
    break;
	
	case 'BP8_SV_UMB': 
    title = "Bahria Town P-8 UMAR BLOCK";
    lyr = "gm:BP8_SV_UMB ";
    extent = "33.48731,73.10354";
    zooml =  15;
    break;
	
	case 'BP8_SV_USB': 
    title = "Bahria Town P-8 Usman Block";
    lyr = "gm:BP8_SV_USB ";
    extent = "33.48993,73.08758";
    zooml =  15;
    break;
	
	case 'BP8_SBH_AV1': 
    title = "Bahria Town P-8 Safari and bahria homes Awami Villa 1";
    lyr = "gm:BP8_SBH_AV1";
    extent = "33.49864,73.10103";
    zooml =  15;
    break;
	
	case 'BP8_SBH_AV2': 
    title = "Bahria Town P-8 Safari and bahria homes Awami Villa 2";
    lyr = "gm:BP8_SBH_AV2";
    extent = "33.49658,73.10981";
    zooml =  15;
    break;
	
	case 'BP8_SBH_LC': 
    title = "Bahria Town P-8 Safari and bahria homes Linear commercial";
    lyr = "gm:BP8_SBH_LC";
    extent = "33.50070,73.10328";
    zooml =  15;
    break;
	
	case 'BP8_SBH_BH': 
    title = "Bahria Town P-8 Safari and bahria homes Bahria Homes";
    lyr = "gm:BP8_SBH_BH";
    extent = "33.49920, 73.10749";
    zooml =  15;
    break;
	
	case 'Bahria-Ali-block': 
    title = "Bahria Town P-8 Ali Block";
    lyr = "gm:BTR_Ph8_Ali_Block";
    extent = "33.49223,73.08865";
    zooml =  15;
    break;
	
	case 'Bahria-hamlet-block': 
    title = "Bahria Town P-8 Hamlet";
    lyr = "gm:BTR_Ph8_Hamlet";
    extent = "33.49225,73.11209";
    zooml =  15;
    break;

	case 'Bahria-spring-south': 
    title = "Bahria Town P-8 Spring South";
    lyr = "gm:BTR_Ph8_Spring_south";
    extent = "33.5175,73.1035";
    zooml =  15;
    break;

	case 'BGC': 
    title = "Bahria Town P-8 Garden City";
    lyr = "gm:Bahria_Garden_City";
    extent = "33.5191,73.1223";
    zooml =  15;
    break;	
	
	case 'Bahria-Phase-8-Extension': 
    title = "Bahria Town P-8 Extension";
    lyr = "gm:Bahria_phase_8_extension";
    extent = "33.44316,73.0607";
    zooml =  15;
    break;
	
		
	case 'b17': 
    title = "B17";
    lyr = "gm:B17_gp";
    //72.8259365794824,33.684007090051104
	extent = "33.68336430329389, 72.82606532551895";
    zooml =  13;
    break;
	
	case 'b17a': 
    title = "B17 Block A";
    lyr = "gm:B17-B(A)_REC";
    //72.8259365794824,33.684007090051104
	extent = "33.693072, 72.828735";
    zooml =  15;
    break;
		
	case 'b17b': 
    title = "B17 Block B";
    lyr = "gm:B17_Block-B";
    //72.8259365794824,33.684007090051104
	extent = "33.693072, 72.828735";
    zooml =  15;
    break;
	
	case 'b17c': 
    title = "B17 Block C";
    lyr = "gm:B-17 Block(C)_rec";
    //72.8259365794824,33.684007090051104
	extent = "33.678260, 72.824430";
    zooml =  15;
    break;



	case 'b17c1': 
    title = "B17 Block C1";
    lyr = "gm:B17_Block-C1";
    //72.8259365794824,33.684007090051104
	extent = "33.678260, 72.824430";
    zooml =  15;
    break;

	
	case 'b17d': 
    title = "B17 Block D";
    lyr = "gm:B17_Block_D";
    //72.8259365794824,33.684007090051104
	extent = "33.678260, 72.824430";
    zooml =  15;
    break;
	
    case 'b17e': 
    title = "B17 Block E";
    lyr = "gm:B_17_block_E_rect";
    //72.8259365794824,33.684007090051104
	extent = "33.68157440180,72.79406223370";
    zooml =  15;
    break;
	
	case 'b17f': 
    title = "B17 Block F";
    lyr = "gm:B17(Block F)_rec";
    //72.8259365794824,33.684007090051104
	extent = "33.68157440180,72.79406223370";
    zooml =  15;
    break;


	case 'b17g': 
    title = "B17 Block G";
    lyr = "gm:B17 Block G";
    //72.8259365794824,33.684007090051104
	extent = "33.68157440180,72.79406223370";
    zooml =  15;
    break;

	case 'BEISB': 
    title = "Bahria Enclave Islamabad";
    lyr = "gm:Bahria_Enclave_Isbd";
    //72.8259365794824,33.684007090051104
	extent = "33.690116,73.232065";
    zooml =  14;
    break;

	case 'cpel': 
    title = "Capital Enclave";
    lyr = "gm:CapitalEnclave";
    //72.8259365794824,33.684007090051104
	extent = "33.576003,73.162832";
    zooml =  15;
    break;


	case 'c15': 
    title = "C15";
    lyr = "gm:C15";
    //72.8259365794824,33.684007090051104
	extent = "33.686961,72.886716";
    zooml =  15;
    break;

	case 'C-18': 
    title = "C18";
    lyr = "gm:C-18";
    //72.8259365794824,33.684007090051104
	extent = "33.67302,72.8215";
    zooml =  15;
    break;

	case 'CDECHS': 
    title = "CDECHS E16 E17";
    lyr = "gm:CDECHS";
    //72.8259365794824,33.684007090051104
	extent = "33.655802,72.884258";
    zooml =  15;
    break;

//Start new CSC Masterplan & HighResolution Maps Combine

	case 'CSC_MP': 
    title = "CSC_MP";
    lyr = "gm:CSC_MP&HR_Combine";
	extent = "33.424352,72.851449";
    zooml =  12;
    break;

    case 'cscop': 
    title = "CSC Overseas Prime";
    lyr = "gm:CSC_MP_New_Prime1";
	extent = "33.443862, 72.879732";
    zooml =  14;
    break;
	
	case 'cscob1': 
    title = "CSC OB11";
    lyr = "gm:CSC_MP_New_Overseas_East";
	extent = "33.463394, 72.866069";
    zooml =  14;
    break;
	
	case 'cscharmony': 
    title = "CSC Harmony";
    lyr = "gm:CSC_MP_New_Harmony";
	extent = "33.410854, 72.837915";
    zooml =  15;
    break;


    case 'csceb1': 
    title = "CSC_Executive1";
    lyr = "gm:CSC_MP_New_Executive1";
	extent = "33.433710, 72.865233";
    zooml =  14;
    break;
	
	case 'csccent': 
    title = "CSC_Central";
    lyr = "gm:CSC_MP_New_Central1";
	extent = "33.44076416641474,72.84905745368451";
    zooml =  14;
    break;

//End Start new CSC Masterplan & HighResolution Maps Combine
   

	case 'csc1': 
    title = "CSC";
    lyr = "gm:csc";
	extent = "33.43160596680, 72.85438998070";
    zooml =  15;
    featureInfoFlag = true;
    break;

//lyr = "gm:CSS_MP_16B";
    case 'cscmp': 
    title = "CSC Master Plan";
    lyr = "gm:CSC_MP_GP";
	extent = "33.43160596680,72.85438998070";
    zooml =  12.5;
    featureInfoFlag = true;
    break;

    case 'cscop': 
    title = "CSC Overseas Prime";
    lyr = "gm:CSC_MP_New_Prime1";
	extent = "33.443862, 72.879732";
    zooml =  15;
    //featureInfoFlag = true;
    break;
    
    case 'cscoc': 
    title = "CSC Overseas Central1";
    lyr = "gm:CSS_Overseas_Central1";
	extent = "33.436127, 72.843271";
    zooml =  15;
    featureInfoFlag = true;
    break;

    case 'cscoch': 
    title = "CSC Overseas Central Harmony";
    lyr = "gm:CSS_Overseas_Central_Harmony1";
	extent = "33.43160596680, 72.85438998070";
    zooml =  15;
    featureInfoFlag = true;
    break;

    case 'cscocn': 
    title = "CSC Overseas Central New1";
    lyr = "gm:CSS_Overseas_Central_New1";
	extent = "33.436127, 72.843271";
    zooml =  15;
    featureInfoFlag = true;
    break;

    
    case 'cscob1': 
    title = "CSC OB11";
    lyr = "gm:CSC_MP_New_Overseas_East";
	extent = "33.47502745781094, 72.85391545202583";
    zooml =  15;
    featureInfoFlag = true;
    break;

    case 'cscharmony': 
    title = "CSC Harmony";
    lyr = "gm:CSC_MP_New_Harmony";
	extent = "33.410854, 72.837915";
    zooml =  15;
    featureInfoFlag = true;
    break;


    case 'csceb1': 
    title = "CSC_Executive1";
    lyr = "gm:CSC_MP_New_Executive1";
	extent = "33.44076416641474,72.84905745368451";
    zooml =  15;
    break;
	
	case 'csccent': 
    title = "CSC_Central";
    lyr = "gm:CSC_MP_New_Central1";
	extent = "33.44076416641474,72.84905745368451";
    zooml =  15;
    break;

    case 'CBR-PHASE-1': 
    title = "CBR-PHASE-1";
    lyr = "gm:CBR_Ph1";
	extent = "33.5574, 73.1471";
    zooml =  15;
    featureInfoFlag = true;
    break;

    case 'cbr2': 
    title = "CBR Phase 2";
    lyr = "gm:CBR_Phase_2";
	extent = "33.56587163233209, 72.90941391720132";
    zooml =  15;
    featureInfoFlag = true;
    break;
	
	case 'd12': 
    title = "D-12";
    lyr = "gm:D12";
	extent = "33.701431,72.944497";
    zooml =  15;
    break;
	

	case 'd17': 
    title = "D-17";
    lyr = "gm:D17_Rec";
	extent = "33.6581286208433, 72.8587485533666";
    zooml =  15;
    break;
	
    case 'd18': 
    title = "D-18 (AWT)";
    lyr = "gm:AWT D-18_rect";
	extent = "33.64610243380,72.82103074320";
    zooml =  15;
    break;
   
 case 'dha1_isb': 
    title = "DHA Phase1 Islamabad";
    lyr = "gm:DHA_Ph1_Isbd";
	extent = "33.538414,73.096972";
    zooml =  14;
    break;


 case 'dha2_isb': 
    title = "DHA Phase2 Islamabad";
    lyr = "gm:DHA_p2_isbd";
	extent = "33.529411,73.145577";
    zooml =  14;
    break;

 case 'DHA-phase-3': 
    title = "DHA Phase3 Islamabad";
    lyr = "gm:DHA_Phase_3";
	extent = "33.4906,73.1603";
    zooml =  14;
    break;

 case 'DHA-phase-4': 
    title = "DHA Phase4 Islamabad";
    lyr = "gm:DHA_Phase_4";
	extent = "33.51967,73.07678";
    zooml =  14;
    break;


 case 'echs': 
    title = "D18_ECHS";
    lyr = "gm:D18_ECHS";
	extent = "33.650071,72.846705";
    zooml =  15;
    break;


    case 'e11': 
    title = "E-11";
    lyr = "gm:E11_rec";
	extent = "33.69488004050,72.97073582140";
    zooml =  15;
    break;

    case 'RPHS': 
    title = "Roshan Pakistan E-16";
    lyr = "gm:Roshan_Pakistan_E-16";
	extent = "33.64381572740,72.88538374340";
    zooml =  15;
    break;

    case 'e17': 
    title = "E-17";
    lyr = "gm:E-17_rec";
	extent = "33.64812011640,72.87263798830";
    zooml =  15;
    break;

    case 'f6': 
    title = "F6";
    lyr = "gm:F6";
	extent = "33.72975960740607, 73.07524938296854";
    zooml =  15;
    break;
    
	case 'FMC': 
    title = "FMC";
    lyr = "gm:FMC";
	extent = "33.692377, 72.810210";
    zooml =  15;
    break;
	
    case 'f7': 
    title = "F7";
    lyr = "gm:F7";
	extent = "33.72092742777887, 73.05734538351636";
    zooml =  15;
    break;

    case 'f8': 
    title = "F8";
    lyr = "gm:F8";
	extent = "33.71151747223355, 73.04059519090984";
    zooml =  15;
    break;

    case 'f10': 
    title = "F-10";
    lyr = "gm:F10";
	extent = "33.69220726411773, 73.00615005569685";
    zooml =  15;
    break;

    case 'f11': 
    title = "F11";
    lyr = "gm:F11";
	extent = "33.683341370372254, 72.98870972158747";
    zooml =  15;
    break;


    case 'f15': 
    title = "F-15";
    lyr = "gm:F-15_gp";
	extent = "33.64265990550,72.91449936500";
    zooml =  15;
    break;

    case 'f16': 
    title = "F-16";
    lyr = "gm:F16";
	extent = "33.636573000,72.9037240000";
    zooml =  15;
    break;

    case 'fh': 
    title = "Faisal Hills";
    lyr = "gm:Faisal-Hills-Taxila-Map-11";
	extent = "33.709386, 72.780842";
    zooml =  15;
    break;

    case 'ft': 
    title = "Faisal Town";
    lyr = "gm:Faisal-Town_rec";
	extent = "33.60885340210,72.87151893250";
    zooml =  15;
    break;



    case 'i9': 
    title = "I-9";
    lyr = "gm:I9_rec";
	extent = "33.657730,73.055207";
    zooml =  15;
    break;

    case 'i15': 
    title = "I-15";
    lyr = "gm:I15_gp";
	extent = "33.60233918530,72.95053582690";
    zooml =  15;
    break;

    case 'i16': 
    title = "I-16";
    lyr = "gm:i16";
	extent = "33.59345284370,72.93375334070";
    zooml =  15;
    break;

    case 'mc': 
    title = "Mumtaz City";
    lyr = "gm:Mumtaz_City";
	extent = "33.58739650010,72.85794408800";
    zooml =  15;
    break;

    case 'tc': 
    title = "Top City";
    lyr = "gm:TopCity";
	extent = "33.572680, 72.873346";
    zooml =  14;
    break;

    case 'ue': 
    title = "Upcountry Enclosures";
    lyr = "gm:Upcountry_Enclosures";
	extent = "33.55770920640,72.93891377810";
    zooml =  15;
    break;

    case 'ut': 
    title = "University Town";
    lyr = "gm:university town_rec";
	extent = "33.58316144500,72.88837240930";
    zooml =  15;
    break;

    case 'g9': 
    title = "G-9";
    lyr = "gm:G9";
	extent = "33.688410,73.034840";
    zooml =  15;
    break;
   
    case 'g6': 
    title = "G-6";
    lyr = "gm:G6";
	extent = "33.717331,73.088246";
    zooml =  15;
    break;

   
 case 'g11': 
    title = "G-11";
    lyr = "gm:G11";
	extent = "33.668377,73.000442";
    zooml =  15;
    break;

case 'g13': 
    title = "G-13";
    lyr = "gm:G13";
	extent = "33.650590, 72.962645";
    zooml =  15;
    break;  
  
case 'g15': 
    title = "G-15";
    lyr = "gm:G15_New";
	extent = "33.63126651360,72.92456977300";
    zooml =  15;
    break;

    case 'g16': 
    title = "G-16";
    lyr = "gm:G-16_gp";
	extent = "33.62466335390,72.91093609010";
    zooml =  15;
    break;
	
	
	
	case 'GGI': 
    title = "GulbergGreen_Isb";
    lyr = "gm:GulbergGreen_Isb";
	extent = "33.612479,73.172237";
    zooml =  13;
    break;
	
	
  	case 'Gulberg-Residencia-Islamabad': 
    title = "Gulberg_Residencia_Isb";
    lyr = "gm:Gulberg_Residencia_Isb";
	extent = "33.601738,73.210893";
    zooml =  13;
    break;
  
    case 'i8': 
    title = "I-8";
    lyr = "gm:I8";
	extent = "33.667559,73.071684";
    zooml =  15;
    break;
 
   case 'i10': 
    title = "I-10";
    lyr = "gm:I10";
	extent = "33.649540,73.037567";
    zooml =  15;
    break;
	
		
	case 'NA12': 
    title = "Naval_Anchorage";
    lyr = "gm:Naval_Anchorage_Ph12";
	extent = "33.577188,73.197021";
    zooml =  14;
    break;



case 'WT_isbd': 
    title = "Wapda_Town_Isbd";
    lyr = "gm:Wapda_Town_rec1";
	extent = "33.659853,72.813317";
    zooml =  14;
    break;


	case 'Zaraj_Isbd': 
    title = "Naval_Anchorage";
    lyr = "gm:Zaraj_Isbd";
	extent = "33.514875,73.153222";
    zooml =  15;
    break;
	
	case 'DHA_Ph5_Isbd': 
    title = "DHA Phase 5 Isbd";
    lyr = "gm:Isb_DHA_Ph5";
	extent = "33.52770,73.21203";
    zooml =  14;
    break;

	case 'DHA-phase-6': 
    title = "DHA Phase 6 Isbd";
    lyr = "gm:DHA_ph6_Isb";
	extent = "33.5454,73.299";
    zooml =  14;
    break;


	case 'E18-Islamabad': 
    title = "E18 Isbd";
    lyr = "gm:E18";
	extent = "33.63416,72.85867";
    zooml =  14;
    break;

	case 'E12': 
    title = "E12 Isbd";
    lyr = "gm:E12";
	extent = "33.691192, 72.957756";
    zooml =  14;
    break;

	case 'E19': 
    title = "E19 Isbd";
    lyr = "gm:E19";
	extent = "33.62683,72.81236";
    zooml =  14;
    break;

	case 'E7': 
    title = "E7 Isbd";
    lyr = "gm:E7";
	extent = "33.72756,73.04805";
    zooml =  14;
    break;
	
	case 'PMCHS-E-11': 
    title = "PMCHS-E-11";
    lyr = "gm:PMCHS_E-11";
	extent = "33.6958,72.9690";
    zooml =  16;
    break;

	case 'Eighteen': 
    title = "Eighteen Isbd";
    lyr = "gm:EIGHTEEN";
	extent = "33.59194,72.89263";
    zooml =  14;
    break;

	case 'Engineer-Housing': 
    title = "Engineer_Housing";
    lyr = "gm:Engineer_Housing";
	extent = "33.662921, 72.870994";
    zooml =  15;
    break;

	case 'Ex-Serene': 
    title = "EX-SERENE Isbd";
    lyr = "gm:EX-SERENE";
	extent = "33.49060,73.13667";
    zooml =  14;
    break;

	case 'F14': 
    title = "F14 Isbd";
    lyr = "gm:F14";
	extent = "33.65539,72.93596";
    zooml =  14;
    break;

	case 'FOECHS': 
    title = "FOECHS";
    lyr = "gm:FOECHS";
	extent = "33.57285,72.92907";
    zooml =  14;
    break;

	case 'G14': 
    title = "G14";
    lyr = "gm:G14";
	extent = "33.64155,72.94621";
    zooml =  14;
    break;

	case 'G17': 
    title = "G17";
    lyr = "gm:G17";
	extent = "33.61091,72.88897";
    zooml =  14;
    break;

	case 'Gandhara': 
    title = "Gandhara City";
    lyr = "gm:Gandhara_City";
	extent = "33.59013,72.84845";
    zooml =  14;
    break;

	case 'I12': 
    title = "I12";
    lyr = "gm:I12";
	extent = "33.63005,73.00183";
    zooml =  14;
    break;

	case 'I14': 
    title = "I14";
    lyr = "gm:I14";
	extent = "33.61235,72.96720";
    zooml =  14;
    break;

	case 'IMP': 
    title = "Islamabad_Master_Plan";
    lyr = "gm:Islamabad_Master_Plan";
	extent = "33.694707, 73.064957";
    zooml =  11;
    break;
	
	case 'Jinnah_Garden': 
    title = "Jinnah_Garden";
    lyr = "gm:Jinnah_Garden";
	extent = "33.57023,73.17418";
    zooml =  14;
    break;

	case 'Kashmir_Garden': 
    title = "Kashmir_Garden";
    lyr = "gm:Kashmir_Garden";
	extent = "33.58847,73.173243";
    zooml =  14;
    break;
	
	case 'Mar_VH': 
    title = "Margalla View Housing";
    lyr = "gm:Margalla_View_Housing";
	extent = "33.65835,72.85425";
    zooml =  14;
    break;	

	case 'MOC-E19': 
    title = "Ministry of Commerce";
    lyr = "gm:Ministery_Commerce";
	extent = "33.62602,72.81539";
    zooml =  14;
    break;	

	case 'NHF-Map': 
    title = "NHF";
    lyr = "gm:Isb_NHF";
	extent = "33.54727,73.23107";
    zooml =  14;
    break;	

	case 'OPF': 
    title = "OPF";
    lyr = "gm:Isb_OPF";
	extent = "33.58263,73.24070";
    zooml =  14;
    break;
	
		case 'Orchard-Scheme': 
    title = "Orchard_Scheme";
    lyr = "gm:Orchard_Scheme";
	extent = "33.679137, 73.106859";
    zooml =  14;
    break;
	

	
	case 'PECHS-Islamabad': 
    title = "PECHS";
    lyr = "gm:Isb_PECHS";
	extent = "33.58365,72.83504";
    zooml =  15;
    break;

	case 'Paradise-City': 
    title = "Paradise City";
    lyr = "gm:Isb_Paradise_City";
	extent = "33.62531,72.88830";
    zooml =  15;
    break;

	case 'Park_View_Isb': 
    title = "Park View Isb";
    lyr = "gm:Isb_Parkview_City";
	extent = "33.72069,73.21216";
    zooml =  14;
    break;
	
		case 'pvc-block-j': 
    title = "Park View Isb Block J";
    lyr = "gm:Park_view_BlockJ";
	extent = "33.715,73.228";
    zooml =  15;
    break;
	
		case 'PWD': 
    title = "PWD Isb";
    lyr = "gm:PWD_Isb";
	extent = "33.57111,73.14553";
    zooml =  15;
    break;
	
	case 'PNF': 
    title = "Pakistan_Naval_Farms";
    lyr = "gm:Pakistan_Naval_Farms";
	extent = "33.723269, 73.241552";
    zooml =  14;
    break;
	
	case 'Rahman_Enclave': 
    title = "Rahman Enclave";
    lyr = "gm:Rahman_Enclave";
	extent = "33.62936,73.13326";
    zooml =  14;
    break;

	case 'River-Garden': 
    title = "River Garden";
    lyr = "gm:River_Garden";
	extent = "33.550,73.1661";
    zooml =  15;
    break;

		case 'Silver-City': 
    title = "Silver City Rwp";
    lyr = "gm:Silver_City_Rwp";
	extent = "33.540,72.9460";
    zooml =  15;
    break;
	
	
	case 'Services_Co': 
    title = "Services Cooperative Housing";
    lyr = "gm:Services_CoHS";
	extent = "33.70158,72.97247";
    zooml =  14;
    break;
	
	case 'senate-avenue': 
    title = "Senate Avenue Housing";
    lyr = "gm:Senate_Avenue";
	extent = "33.5876,73.229";
    zooml =  15;
    break;

	case 'Soan-Garden': 
    title = "Soan Garden";
    lyr = "gm:Isb_Soan_Garden";
	extent = "33.56345,73.15691";
    zooml =  14;
    break;
	
	case 'Sky-Garden': 
    title = "Sky_Garden";
    lyr = "gm:Sky_Garden";
	extent = "33.761, 73.320735";
    zooml =  14;
    break;
	
	case 'Tele_Garden': 
    title = "Tele Garden";
    lyr = "gm:Tele_Garden";
	extent = "33.62700,72.87204";
    zooml =  14;
    break;

	case 'Tele_Garden_F17': 
    title = "Tele Garden F17";
    lyr = "gm:Tele_Garden_F17";
	extent = "33.63333,72.87982";
    zooml =  14;
    break;

	case 'Rwp_Isb_All_Maps': 
    title = "Rwp_Isb_All_Maps";
    lyr = "gm:All_Maps_11Jan2023_Complete";
	extent = "33.63333,72.87982";
    zooml =  10;
    break;

	case 'Kashmir_Model': 
    title = "Kashmir_Model_Town";
    lyr = "gm:Kashmir_Model";
	extent = "33.49768,72.92368";
    zooml =  14;
    break;

	case 'Lahore-Smart-City-Map': 
    title = "Lahore Smart City";
    lyr = "gm:LSC";
	extent = "31.724036, 74.290784";
    zooml =  13;
    break;


	case 'WWF': 
    title = "Workers Welfare Fund";
    lyr = "gm:WWF_ISB";
	extent = "33.57647, 73.21564";
    zooml =  15;
    break;

	case 'BWC': 
    title = "Blue World City";
    lyr = "gm:BWC_rec";
	extent = "33.371973, 72.879372";
    zooml =  14;
    break;

	case 'MAE': 
    title = "Marble Arch Enclave";
    lyr = "gm:Marble_arch_enclave";
	extent = "33.547, 72.9525";
    zooml =  15;
    break;

	case 'Life-Residencia': 
    title = "The Life Residencia";
    lyr = "gm:Life_Residencia";
	extent = "33.579, 72.8195";
    zooml =  14;
    break;

	case 'Rudn-Enclave': 
    title = "Rudn Enclave";
    lyr = "gm:Ruda_Enclave";
	extent = "33.443, 72.9557";
    zooml =  13;
    break;

	case 'Mivida-City': 
    title = "Mivida City";
    lyr = "gm:Mivida_City";
	extent = "33.3759, 72.8583";
    zooml =  13;
    break;

	case 'Judicial-Colony': 
    title = "Judicial Colony Rwp";
    lyr = "gm:Judicial_Colony_Rwp";
	extent = "33.5957, 73.1346";
    zooml =  16;
    break;





























































	default:
        extent = "30.919819372482223, 70.16265322877251";
    
}

var mapView = new ol.View({
    center: ol.proj.fromLonLat([parseFloat(extent.split(',')[1]), parseFloat(extent.split(',')[0])]),

    zoom: zooml
});

var map = new ol.Map({
    target: 'map',
    view: mapView,
    controls: []
});

// Geolocation marker
var markerEl = document.getElementById('geolocation_marker');
var marker = new ol.Overlay({
  positioning: 'center-center',
  element: markerEl,
  stopEvent: false
});
map.addOverlay(marker);


// LineString to store the different geolocation positions. This LineString
  // is time aware.
  // The Z dimension is actually used to store the rotation (heading).
  var positions = new ol.geom.LineString([],
    /** @type {ol.geom.GeometryLayout} */ ('XYZM'));


var geolocation = new ol.Geolocation({
    projection: mapView.getProjection(),
    trackingOptions: {
      maximumAge: 10000,
      enableHighAccuracy: true,
      timeout: 600000
    }
  });

  //map.addControl(geolocation);

  function el(id) {
    return document.getElementById(id);
  }

  function addPosition(position, heading, m, speed) {
    var x = position[0];
    var y = position[1];
    var fCoords = positions.getCoordinates();
    var previous = fCoords[fCoords.length - 1];
    var prevHeading = previous && previous[2];
    if (prevHeading) {
      var headingDiff = heading - mod(prevHeading);
  
      // force the rotation change to be less than 180�
      if (Math.abs(headingDiff) > Math.PI) {
        var sign = (headingDiff >= 0) ? 1 : -1;
        headingDiff = -sign * (2 * Math.PI - Math.abs(headingDiff));
      }
      heading = prevHeading + headingDiff;
    }
    positions.appendCoordinate([x, y, heading, m]);
  
    // only keep the 20 last coordinates
    positions.setCoordinates(positions.getCoordinates().slice(-20));
  
    // FIXME use speed instead
    if (heading && speed) {
      markerEl.src = 'data/geolocation_marker_heading.png';
    } else {
      markerEl.src = 'data/geolocation_marker.png';
    }
  }

  // recenters the view by putting the given coordinates at 3/4 from the top or
  // the screen
  function getCenterWithHeading(position, rotation, resolution) {
    var size = map.getSize();
    var height = size[1];
  
    return [
      position[0] - Math.sin(rotation) * height * resolution * 1 / 4,
      position[1] + Math.cos(rotation) * height * resolution * 1 / 4
    ];
  }
  
  var previousM = 0;
  function updateView() {

    //alert('in');
    // use sampling period to get a smooth transition
    var m = Date.now() - deltaMean * 1.5;
    m = Math.max(m, previousM);
    previousM = m;
    // interpolate position along positions LineString
    var c = positions.getCoordinateAtM(m, true);
    if (c) {
      mapView.setCenter(getCenterWithHeading(c, -c[2], mapView.getResolution()));
      mapView.setRotation(-c[2]);
      marker.setPosition(c);
    }
  }

  var clicked = 0;

  el('track1').addEventListener('click', function() {
    //alert('in');
    $("#track1").prop("checked", true);
    geolocation.setTracking(this.checked);

    //map.on('postcompose', updateView);
    //map.render();
	el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
    el('altitude').innerText = geolocation.getAltitude() + ' [m]';
    el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
    el('heading').innerText = geolocation.getHeading() + ' [rad]';
    el('speed').innerText = geolocation.getSpeed() + ' [m/s]';

    var position = geolocation.getPosition();
    var accuracy = geolocation.getAccuracy();
    var heading = geolocation.getHeading() || 0;
    var speed = geolocation.getSpeed() || 0;
    var m = Date.now();
  
  
    if(clicked>0) {
        mapView.setCenter(position);
    }
    
  });


  $("#trackme").click(function(){
    //geolocation.setTracking(el('track1').checked);
    //alert('in');
    
    $("#track1").click();
  });

  var deltaMean = 500; // the geolocation sampling period mean in ms
  var i =0;
  // update the HTML page when the position changes.
  geolocation.on('change', function() {

    //alert('in');
    
    
    el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
    el('altitude').innerText = geolocation.getAltitude() + ' [m]';
    el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
    el('heading').innerText = geolocation.getHeading() + ' [rad]';
    el('speed').innerText = geolocation.getSpeed() + ' [m/s]';

    var position = geolocation.getPosition();
    var accuracy = geolocation.getAccuracy();
    var heading = geolocation.getHeading() || 0;
    var speed = geolocation.getSpeed() || 0;
    var m = Date.now();
  
    if(clicked==0) {
        clicked++;
       // $("#track1").click();
        mapView.setCenter(position);
    }

    // addPosition(position, heading, m, speed);

    // var coords = positions.getCoordinates();
    // var len = coords.length;
    // if (len >= 2) {
    //   deltaMean = (coords[len - 1][3] - coords[0][3]) / (len - 1);
    // }
  });

  // handle geolocation error.
  geolocation.on('error', function(error) {
    var info = document.getElementById('info');
    info.innerHTML = error.message;
    info.style.display = '';
  });

  var accuracyFeature = new ol.Feature();
  geolocation.on('change:accuracyGeometry', function() {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
  });

  var positionFeature = new ol.Feature();
  positionFeature.setStyle(new ol.style.Style({
    image: new ol.style.Circle({
      radius: 6,
      fill: new ol.style.Fill({
        color: '#3399CC'
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      })
    })
  }));

  geolocation.on('change:position', function() {
    var coordinates = geolocation.getPosition();
    positionFeature.setGeometry(coordinates ?
      new ol.geom.Point(coordinates) : null);
  });

  new ol.layer.Vector({
    map: map,
    source: new ol.source.Vector({
      features: [accuracyFeature, positionFeature]
    })
  });

var noneTile = new ol.layer.Tile({
    title: 'None',
    type: 'base',
    visible: false
});

var osmTile = new ol.layer.Tile({
    title: 'Map',
    visible: false,
    type: 'base',
    source: new ol.source.OSM()
});

// High Res variable declared
const Satellite_Imagery = new ol.layer.Tile({
    source: new ol.source.XYZ({
        attributions: ['Powered by Esri', 'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'],
        attributionsCollapsible: false,
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxZoom: 18
    }),
    visible: true,
    title: 'Satellite',
    type: 'base'
})

// map.addLayer(osmTile);
var baseGroup = new ol.layer.Group({
    title: 'Base Maps',
    fold: 'open',
    layers: [ Satellite_Imagery, osmTile]
});//

map.addLayer(baseGroup);


var or = window.location.origin;



//Assuming URL has "?post=1234&action=edit"


var disp = new ol.layer.Tile({
    title: title,
    visible: true,
    source: new ol.source.TileWMS({
        url: or + '/geoserver/gm/wms',
        params: { LAYERS: lyr, TILED: true },
        serverType: 'geoserver'
    })
});


var tiled_layer;
                    tiled_layer = new ol.layer.Tile({
                        title: title,
                        //visible: false,
                        visible: true,
                        source: new ol.source.XYZ({
                            // url: '/nha/resources/raster/' + code + '/' + pre_post + '/' + folder_date + '/{z}/{x}/{-y}.png'
                            url: '/data/tiled/csc/{z}/{x}/{y}.png'//3_Jan_Jun_2021//{-y}
                        })
                    });
                  
                    // var layers = imageryGp.getLayers();
                    // if (layers) {
                    //     map.removeLayer(imageryGp);
                    // }
                    // layers.push(tiled_layer);
                    // map.addLayer(imageryGp);

var RasterGroup = new ol.layer.Group({
    title: 'Raster Maps',
    fold: 'close',
    //layers: [AGG, g15, g16, f16]
    layers: [ disp]
    
});

map.addLayer(RasterGroup);

var societies_rwp_isb = new ol.layer.Tile({
    title: "Societies",
    visible: false,
    source: new ol.source.TileWMS({
        url: or + '/geoserver/gm/wms',
        params: { 'LAYERS': 'gm:societies_rwp_isb', 'TILED': true },
        serverType: 'geoserver'
    })
});

if(para=="cscmp"){

    var csc_ph2 = new ol.layer.Tile({
        title: "Phase-II",
        visible: true,
        opacity:0.5,
        source: new ol.source.TileWMS({
            url: or + '/geoserver/gm/wms',
            params: { 'LAYERS': 'gm:CSC_Phase2', 'TILED': true },
            serverType: 'geoserver'
        })
    });


    var csc_mp_blk_bry = new ol.layer.Tile({
        title: "Boundary",
        visible: false,
        source: new ol.source.TileWMS({
            url: or + '/geoserver/gm/wms',
            params: { 'LAYERS': 'gm:CSC_Masterplan_Blocks_Boundary', 'TILED': true },
            serverType: 'geoserver'
        })
    });

    var csc_mp_pts = new ol.layer.Tile({
        title: "Points",
        visible: false,
        source: new ol.source.TileWMS({
            url: or + '/geoserver/gm/wms',
            params: { 'LAYERS': 'gm:csc_mp_points', 'TILED': true },
            serverType: 'geoserver'
        })
    });
    
    
    //map.addLayer(csc_mp_blk_bry);
    
    
    var csc_mp_rds = new ol.layer.Tile({
        title: "Roads",
        visible: false,
        source: new ol.source.TileWMS({
            url: or + '/geoserver/gm/wms',
            params: { 'LAYERS': 'gm:CSC_Masterplan_Roads', 'TILED': true },
            serverType: 'geoserver'
        })
    });
    
    //map.addLayer(csc_mp_rds);
    
    var csc_mp_mets = new ol.layer.Tile({
        title: "MetroStations",
        visible: false,
        source: new ol.source.TileWMS({
            url: or + '/geoserver/gm/wms',
            params: { 'LAYERS': 'gm:CSC_Metro_Station', 'TILED': true },
            serverType: 'geoserver'
        })
    });
    
    //map.addLayer(csc_mp_mets);
    
    
    var csc_mp_fac = new ol.layer.Tile({
        title: "Facilities",
        visible: false,
        source: new ol.source.TileWMS({
            url: or + '/geoserver/gm/wms',
            params: { 'LAYERS': 'gm:CSC_Masterplan_Facilities', 'TILED': true },
            serverType: 'geoserver'
        })
    });
    
    //map.addLayer(csc_mp_fac);

    var VectorGroup = new ol.layer.Group
    ({ 
        'title': 'Vector Layers',
        type: 'vc',
        fold: 'close',
        layers: [societies_rwp_isb, csc_ph2, csc_mp_blk_bry, csc_mp_pts, csc_mp_rds, csc_mp_mets, csc_mp_fac] 
    });

    map.addLayer(VectorGroup);
    
    }
    else{
        var VectorGroup = new ol.layer.Group
    ({ 
        'title': 'Vector Layers',
        type: 'vc',
        fold: 'close',
        layers: [societies_rwp_isb] 
    });

    map.addLayer(VectorGroup);
    }



var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);

/*var mousePosition = new ol.control.MousePosition({
    className: 'mousePosition',
    projection: 'EPSG:4326',
    coordinateFormat: function (coordinate) { return ol.coordinate.format(coordinate, '{y} , {x}', 6); }
});
map.addControl(mousePosition);*/

var scaleControl = new ol.control.ScaleLine({
    bar: true,
    text: true
});
//map.addControl(scaleControl);



var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250,
    },
});

map.addOverlay(popup);

closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

// start : zoom to extent

var zteButton = document.createElement('button');
zteButton.innerHTML = '<img src="resources/images/extent.svg" alt="" style="width:20px;height:20px;vertical-align:middle"></img>';
zteButton.className = 'myButton';
zteButton.title = 'Zoom to Extent';

var zteElement = document.createElement('div');
zteElement.className = 'zteButtonDiv';
zteElement.appendChild(zteButton);

//var zteControl = new ol.control.Control({
  //  element: zteElement
//})
var extent = map.getView().calculateExtent();
var zteControl = new ol.control.ZoomToExtent({
    extent: ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:4326')
});

zteControl.className = 'zteButtonDiv';
map.addControl(zteControl);


map.addControl(zteControl);

// start : home Control

var homeButton = document.createElement('button');
homeButton.innerHTML = '<img src="resources/images/home.svg" alt="" style="width:20px;height:20px;vertical-align:middle"></img>';
homeButton.className = 'myButton';
homeButton.title = 'Home';

var homeElement = document.createElement('div');
homeElement.className = 'homeButtonDiv';

//homeElement.appendChild(homeButton);


var homeControl = new ol.control.Control({
    element: homeElement
})

homeButton.addEventListener("click", () => {
    location.href = $(location).attr('href');
    //var extent = source.getExtent();
    //map.getView().fit(extent, map.getSize()); 
})

map.addControl(homeControl);

//Instantiate with some options and add the Control
var geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    lang: 'en',
    placeholder: 'Search for ...',
    limit: 20,
    debug: false,
    autoComplete: true,
    keepOpen: true,
    countrycodes: 'pk'
});
map.addControl(geocoder);

var geocoderSource = geocoder.getSource();

//geocoder.on('addresschosen', function (evt) {

//});

//Listen when an address is chosen
geocoder.on('addresschosen', function (evt) {
    geocoderSource.clear();
    //geocoderSource.addFeature(evt.feature); // add only the last one

    //$('ul').empty();
    $('ul').each(function () {
        if ($(this).attr('class') == 'gcd-gl-result') {
            $(this).empty();
        };
    });
    $('#gcd-input-reset').addClass("gcd-gl-reset gcd-hidden");
    //gcd-gl-reset gcd-hidden
    //console.info(evt);
    //////window.setTimeout(function () {        
    //////    popup.show(evt.coordinate, evt.address.formatted);
    //////}, 2000);
});

function removesearch() {
    geocoderSource.clear();
    setMapExtents(null, 'Pakistan');
    // $(".gcd-input-reset").addClass("gcd-hidden");
}

// end : home Control

// start : full screen Control

var fsButton = document.createElement('button');
fsButton.innerHTML = '<img src="resources/images/fullscreen.svg" alt="" style="width:20px;height:20px;vertical-align:middle"></img>';
fsButton.className = 'myButton';
fsButton.title = 'Full Screen';

var fsElement = document.createElement('div');
fsElement.className = 'fsButtonDiv';
fsElement.appendChild(fsButton);

var fsControl = new ol.control.Control({
    element: fsElement
})

var fs_state = "min";

fsButton.addEventListener("click", () => {
    var mapEle = document.getElementById("map");
    if(fs_state == "min"){
        document.documentElement.requestFullscreen();
        fs_state = "max";
    }
    else if(fs_state == "max"){
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        fs_state = "min";
    }

     // if (mapEle.requestFullscreen) {
        //     mapEle.requestFullscreen();
        //     fs_state = "max";
        // } else if (mapEle.msRequestFullscreen) {
        //     mapEle.msRequestFullscreen();
        //     fs_state = "max";
        // } else if (mapEle.mozRequestFullscreen) {
        //     mapEle.mozRequestFullscreen();
        //     fs_state = "max";
        // } else if (mapEle.webkitRequestFullscreen) {
        //     mapEle.webkitRequestFullscreen();
        //     fs_state = "max";
        // }

})

map.addControl(fsControl);

// end : full screen Control

// start : zoomIn Control

var zoomInInteraction = new ol.interaction.DragBox();

zoomInInteraction.on('boxend', function () {
    var zoomInExtent = zoomInInteraction.getGeometry().getExtent();
    map.getView().fit(zoomInExtent);
});
//filter:brightness(0) invert(1);
var ziButton = document.createElement('button');
ziButton.innerHTML = '<img src="resources/images/zoomIn.svg" alt="" style="width:18px;height:18px;transform: rotate(270deg);vertical-align:middle"></img>';
ziButton.className = 'myButton';
ziButton.id = 'ziButton';
ziButton.title = 'Zoom In';

var ziElement = document.createElement('div');
ziElement.className = 'ziButtonDiv';
ziElement.appendChild(ziButton);

var ziControl = new ol.control.Control({
    element: ziElement
})

var zoomInFlag = false;
ziButton.addEventListener("click", () => {
    
	map.getView().setZoom(map.getView().getZoom() + 1);
    /*ziButton.classList.toggle('clicked');
    if($('#ziButton').hasClass('myButton clicked'))
    {
        removeinteract();
        featureInfoFlag = false;
        //zoomInFlag = !zoomInFlag;
        zoomInFlag = true;
        $('#zoButton').removeClass('myButton clicked');
        $('#zoButton').addClass('myButton');
        $('#featureInfoButton').removeClass('myButton clicked');
        $('#featureInfoButton').addClass('myButton');
        $('#lengthButton').removeClass('myButton clicked');
        $('#lengthButton').addClass('myButton');
        $('#areaButton').removeClass('myButton clicked');
        $('#areaButton').addClass('myButton');
        //$('#qryButton').removeClass('myButton clicked');
        //$('#qryButton').addClass('myButton');
    }
    else{
        featureInfoFlag = true;
        zoomInFlag = false;
        
    }
    
    if (zoomInFlag) {
        document.getElementById("map").style.cursor = "zoom-in";
        map.addInteraction(zoomInInteraction);
    } else {
        map.removeInteraction(zoomInInteraction);
        document.getElementById("map").style.cursor = "default";
    } */
})

map.addControl(ziControl);

//end : zoomIn Control

// start : zoomOut Control

var zoomOutInteraction = new ol.interaction.DragBox();

zoomOutInteraction.on('boxend', function () {
    var zoomOutExtent = zoomOutInteraction.getGeometry().getExtent();
    map.getView().setCenter(ol.extent.getCenter(zoomOutExtent));

    mapView.setZoom(mapView.getZoom() - 1)
});

var zoButton = document.createElement('button');
zoButton.innerHTML = '<img src="resources/images/zoomOut.png" alt="" style="width:18px;height:18px;transform: rotate(270deg);vertical-align:middle"></img>';
zoButton.className = 'myButton';
zoButton.id = 'zoButton';
zoButton.title = 'Zoom Out';

var zoElement = document.createElement('div');
zoElement.className = 'zoButtonDiv';
zoElement.appendChild(zoButton);

var zoControl = new ol.control.Control({
    element: zoElement
})

var zoomOutFlag = false;
zoButton.addEventListener("click", () => {
map.getView().setZoom(map.getView().getZoom() - 1);
   
/* zoButton.classList.toggle('clicked');
    
    if($('#zoButton').hasClass('myButton clicked'))
    {
       
        removeinteract();
        featureInfoFlag = false;
        //zoomOutFlag = !zoomOutFlag;
        zoomOutFlag = true;
        $('#ziButton').removeClass('myButton clicked');
        $('#ziButton').addClass('myButton');
        $('#featureInfoButton').removeClass('myButton clicked');
        $('#featureInfoButton').addClass('myButton');
        $('#lengthButton').removeClass('myButton clicked');
        $('#lengthButton').addClass('myButton');
        $('#areaButton').removeClass('myButton clicked');
        $('#areaButton').addClass('myButton');
        //$('#qryButton').removeClass('myButton clicked');
        //$('#qryButton').addClass('myButton');
    }
    else{
        featureInfoFlag = true;
        zoomOutFlag = false;
     
    }
    
    if (zoomOutFlag) {
        document.getElementById("map").style.cursor = "zoom-out";
        map.addInteraction(zoomOutInteraction);
    } else {
        map.removeInteraction(zoomOutInteraction);
        document.getElementById("map").style.cursor = "default";
    }*/

})

map.addControl(zoControl);

// end : zoomOut Control

// start : FeatureInfo Control

var featureInfoButton = document.createElement('button');
featureInfoButton.innerHTML = '<img src="resources/images/identify.svg" alt="" style="width:20x;height:20px;vertical-align:middle"></img>';
featureInfoButton.className = 'myButton';
featureInfoButton.id = 'featureInfoButton';
featureInfoButton.title = 'Feature Info';

var featureInfoElement = document.createElement('div');
featureInfoElement.className = 'featureInfoDiv';
//featureInfoElement.appendChild(featureInfoButton);

var featureInfoControl = new ol.control.Control({
    element: featureInfoElement
})

//var featureInfoFlag = false;
featureInfoButton.addEventListener("click", () => {
    featureInfoButton.classList.toggle('clicked');
    if($('#featureInfoButton').hasClass('myButton clicked'))
    {
        removeinteract();
        //featureInfoFlag = !featureInfoFlag;
        zoomInFlag = false;
        map.removeInteraction(zoomInInteraction);
        document.getElementById("map").style.cursor = "default";

        zoomOutFlag = false;
        map.removeInteraction(zoomOutInteraction);
        document.getElementById("map").style.cursor = "default";


        lengthFlag = areaFlag = false;

        featureInfoFlag = true;
        $('#ziButton').removeClass('myButton clicked');
        $('#ziButton').addClass('myButton');
        $('#zoButton').removeClass('myButton clicked');
        $('#zoButton').addClass('myButton');
        $('#lengthButton').removeClass('myButton clicked');
        $('#lengthButton').addClass('myButton');
        $('#areaButton').removeClass('myButton clicked');
        $('#areaButton').addClass('myButton');
        //$('#qryButton').removeClass('myButton clicked');
        //$('#qryButton').addClass('myButton');

    }
    else{
        featureInfoFlag = false;
      
    }

    
    
})

map.addControl(featureInfoControl);




map.on('singleclick', function (evt) {
    //alert('in');
    if (featureInfoFlag) 
    {
        content.innerHTML = '';
        var resolution = mapView.getResolution();

        var url = csc_mp_pts.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
            'INFO_FORMAT': 'application/json',
            'propertyName': 'Name,Link'
        });

        
        if (url) {
            $.getJSON(url, function (data) {
                var feature = data.features[0];
                var props = feature.properties;
              
                if(props.Link!=""){
                    content.innerHTML = "<p><a href='"+props.Link+"' target='_blank' >" + props.Name.toUpperCase() + "</a></p> <br> ";
                }
                else{
                    content.innerHTML = "<p>" + props.Name.toUpperCase() + "</p> <br> ";
                }
                popup.setPosition(evt.coordinate);
            })
        } else {
            popup.setPosition(undefined);
        }
    }
});

// start : Length and Area Measurement Control

var lengthButton = document.createElement('button');
lengthButton.innerHTML = '<img src="resources/images/measure-length.png" alt="" style="width:17px;height:17px;vertical-align:middle"></img>';
lengthButton.className = 'myButton';
lengthButton.id = 'lengthButton';
lengthButton.title = 'Measure Length';

var lengthElement = document.createElement('div');
lengthElement.className = 'lengthButtonDiv';
lengthElement.appendChild(lengthButton);

var lengthControl = new ol.control.Control({
    element: lengthElement
})

var lengthFlag = false;
lengthButton.addEventListener("click", () => {
    // disableOtherInteraction('lengthButton');
    lengthButton.classList.toggle('clicked');
    if($('#lengthButton').hasClass('myButton clicked'))
    {
        featureInfoFlag = false;
        //lengthFlag = !lengthFlag;
        lengthFlag = true;
        $('#ziButton').removeClass('myButton clicked');
        $('#ziButton').addClass('myButton');
        $('#zoButton').removeClass('myButton clicked');
        $('#zoButton').addClass('myButton');
        $('#featureInfoButton').removeClass('myButton clicked');
        $('#featureInfoButton').addClass('myButton');
        $('#areaButton').removeClass('myButton clicked');
        $('#areaButton').addClass('myButton');
        //$('#qryButton').removeClass('myButton clicked');
        //$('#qryButton').addClass('myButton');
    }
    else{
        featureInfoFlag = true;
   
    }
    
    document.getElementById("map").style.cursor = "default";
    if (lengthFlag) {
        map.removeInteraction(draw);
        addInteraction('LineString');
    } else {
        removeinteract();
    }

})

map.addControl(lengthControl);

var areaButton = document.createElement('button');
areaButton.innerHTML = '<img src="resources/images/measure-area.png" alt="" style="width:17px;height:17px;vertical-align:middle"></img>';
areaButton.className = 'myButton';
areaButton.id = 'areaButton';
areaButton.title = 'Measure Area';

var areaElement = document.createElement('div');
areaElement.className = 'areaButtonDiv';
areaElement.appendChild(areaButton);

var areaControl = new ol.control.Control({
    element: areaElement
})

var areaFlag = false;
areaButton.addEventListener("click", () => {
    // disableOtherInteraction('areaButton');
    areaButton.classList.toggle('clicked');
    if($('#areaButton').hasClass('myButton clicked'))
    {
        featureInfoFlag = false;
        //areaFlag = !areaFlag;
        areaFlag = true;
        $('#ziButton').removeClass('myButton clicked');
        $('#ziButton').addClass('myButton');
        $('#zoButton').removeClass('myButton clicked');
        $('#zoButton').addClass('myButton');
        $('#featureInfoButton').removeClass('myButton clicked');
        $('#featureInfoButton').addClass('myButton');
        $('#lengthButton').removeClass('myButton clicked');
        $('#lengthButton').addClass('myButton');
        //$('#qryButton').removeClass('myButton clicked');
        //$('#qryButton').addClass('myButton');
    }
    else{
        featureInfoFlag = true;
        areaFlag = false;
        lengthFlag = false;
    }
    
    document.getElementById("map").style.cursor = "default";
    if (areaFlag) {
        map.removeInteraction(draw);
        addInteraction('Polygon');
    } else {
        removeinteract();
    }
})

map.addControl(areaControl);

function removeinteract(){
    map.removeInteraction(draw);
        source.clear();
        const elements = document.getElementsByClassName("ol-tooltip ol-tooltip-static");
        while (elements.length > 0) elements[0].remove();
}
/**
 * Message to show when the user is drawing a polygon.
 * @type {string}
 */
var continuePolygonMsg = 'Click to continue polygon, Double click to complete';

/**
 * Message to show when the user is drawing a line.
 * @type {string}
 */
var continueLineMsg = 'Click to continue line, Double click to complete';

var draw; // global so we can remove it later

var source = new ol.source.Vector();
var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2,
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33',
            }),
        }),
    }),
});

map.addLayer(vector);

function addInteraction(intType) {

    draw = new ol.interaction.Draw({
        source: source,
        type: intType,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(200, 200, 200, 0.6)',
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2,
            }),
            image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.7)',
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)',
                }),
            }),
        }),
    });
    map.addInteraction(draw);

    createMeasureTooltip();
    createHelpTooltip();

    /**
     * Currently drawn feature.
     * @type {import("../src/ol/Feature.js").default}
     */
    var sketch;

    /**
     * Handle pointer move.
     * @param {import("../src/ol/MapBrowserEvent").default} evt The event.
     */
    var pointerMoveHandler = function (evt) {
        if (evt.dragging) {
            return;
        }
        /** @type {string} */
        var helpMsg = 'Click to start drawing';

        if (sketch) {
            var geom = sketch.getGeometry();
            // if (geom instanceof ol.geom.Polygon) {
            //   helpMsg = continuePolygonMsg;
            // } else if (geom instanceof ol.geom.LineString) {
            //   helpMsg = continueLineMsg;
            // }
        }

        //helpTooltipElement.innerHTML = helpMsg;
        //helpTooltip.setPosition(evt.coordinate);

        //helpTooltipElement.classList.remove('hidden');
    };

    map.on('pointermove', pointerMoveHandler);

    // var listener;
    draw.on('drawstart', function (evt) {
        // set sketch
        sketch = evt.feature;

        /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
        var tooltipCoord = evt.coordinate;

        //listener = sketch.getGeometry().on('change', function (evt) {
        sketch.getGeometry().on('change', function (evt) {
            var geom = evt.target;
            var output;
            if (geom instanceof ol.geom.Polygon) {
                output = formatArea(geom);
                tooltipCoord = geom.getInteriorPoint().getCoordinates();
            } else if (geom instanceof ol.geom.LineString) {
                output = formatLength(geom);
                tooltipCoord = geom.getLastCoordinate();
            }
            measureTooltipElement.innerHTML = output;
            measureTooltip.setPosition(tooltipCoord);
        });
    });

    draw.on('drawend', function () {
        measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        //ol.Observable.unByKey(listener);
    });
}


/**
 * The help tooltip element.
 * @type {HTMLElement}
 */
var helpTooltipElement;

/**
 * Overlay to show the help messages.
 * @type {Overlay}
 */
var helpTooltip;

/**
 * Creates a new help tooltip
 */
function createHelpTooltip() {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'ol-tooltip hidden';
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left',
    });
    map.addOverlay(helpTooltip);
}

// map.getViewport().addEventListener('mouseout', function () {
//     helpTooltipElement.classList.add('hidden');
// });

/**
* The measure tooltip element.
* @type {HTMLElement}
*/
var measureTooltipElement;


/**
* Overlay to show the measurement.
* @type {Overlay}
*/
var measureTooltip;

/**
 * Creates a new measure tooltip
 */

function createMeasureTooltip() {
    if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
    });
    map.addOverlay(measureTooltip);
}





/**
 * Format length output.
 * @param {LineString} line The line.
 * @return {string} The formatted length.
 */
var formatLength = function (line) {
    var length = ol.sphere.getLength(line);
    var output;
    if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
    } else {
        output = Math.round(length * 100) / 100 + ' ' + 'm';
    }
    return output;
};

/**
 * Format area output.
 * @param {Polygon} polygon The polygon.
 * @return {string} Formatted area.
 */
var formatArea = function (polygon) {
    var area = ol.sphere.getArea(polygon);
    var output;
    if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
    } else {
        output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
    }
    return output;
};

// end : Length and Area Measurement Control

// start : attribute query

var geojson;
var featureOverlay;

var qryButton = document.createElement('button');
qryButton.innerHTML = '<img src="resources/images/query.svg" alt="" style="width:17px;height:17px;vertical-align:middle"></img>';
qryButton.className = 'myButton';
qryButton.id = 'qryButton';

var qryElement = document.createElement('div');
qryElement.className = 'myButtonDiv';
//qryElement.appendChild(qryButton);

var qryControl = new ol.control.Control({
    element: qryElement
})

var qryFlag = false;
qryButton.addEventListener("click", () => {
    // disableOtherInteraction('lengthButton');
    qryButton.classList.toggle('clicked');
    qryFlag = !qryFlag;
    document.getElementById("map").style.cursor = "default";
    if (qryFlag) {
        if (geojson) {
            geojson.getSource().clear();
            map.removeLayer(geojson);
        }

        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }
        document.getElementById("attQueryDiv").style.display = "block";

        bolIdentify = false;

        addMapLayerList();
    } else {
        document.getElementById("attQueryDiv").style.display = "none";
        document.getElementById("attListDiv").style.display = "none";

        if (geojson) {
            geojson.getSource().clear();
            map.removeLayer(geojson);
        }

        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }
    }

})

map.addControl(qryControl);

function addMapLayerList() {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: or + "/geoserver/wfs?request=getCapabilities",
            dataType: "xml",
            success: function (xml) {
                var select = $('#selectLayer');
                select.append("<option class='ddindent' value=''></option>");
                $(xml).find('FeatureType').each(function () {
                    $(this).find('Name').each(function () {
                        var value = $(this).text();
                        select.append("<option class='ddindent' value='" + value + "'>" + value + "</option>");
                    });
                });
            }
        });
    });

};

$(function () {
    document.getElementById("selectLayer").onchange = function () {
        var select = document.getElementById("selectAttribute");
        while (select.options.length > 0) {
            select.remove(0);
        }
        var value_layer = $(this).val();
        $(document).ready(function () {
            $.ajax({
                type: "GET",
                url: or + "/geoserver/wfs?service=WFS&request=DescribeFeatureType&version=1.1.0&typeName=" + value_layer,
                dataType: "xml",
                success: function (xml) {

                    var select = $('#selectAttribute');
                    //var title = $(xml).find('xsd\\:complexType').attr('name');
                    //	alert(title);
                    select.append("<option class='ddindent' value=''></option>");
                    $(xml).find('xsd\\:sequence').each(function () {

                        $(this).find('xsd\\:element').each(function () {
                            var value = $(this).attr('name');
                            //alert(value);
                            var type = $(this).attr('type');
                            //alert(type);
                            if (value != 'geom' && value != 'the_geom') {
                                select.append("<option class='ddindent' value='" + type + "'>" + value + "</option>");
                            }
                        });

                    });
                }
            });
        });
    }
    document.getElementById("selectAttribute").onchange = function () {
        var operator = document.getElementById("selectOperator");
        while (operator.options.length > 0) {
            operator.remove(0);
        }

        var value_type = $(this).val();
        // alert(value_type);
        var value_attribute = $('#selectAttribute option:selected').text();
        operator.options[0] = new Option('Select operator', "");

        if (value_type == 'xsd:short' || value_type == 'xsd:int' || value_type == 'xsd:double') {
            var operator1 = document.getElementById("selectOperator");
            operator1.options[1] = new Option('Greater than', '>');
            operator1.options[2] = new Option('Less than', '<');
            operator1.options[3] = new Option('Equal to', '=');
        }
        else if (value_type == 'xsd:string') {
            var operator1 = document.getElementById("selectOperator");
            operator1.options[1] = new Option('Like', 'Like');
            operator1.options[2] = new Option('Equal to', '=');
        }
    }

    document.getElementById('attQryRun').onclick = function () {
        map.set("isLoading", 'YES');

        if (featureOverlay) {
            featureOverlay.getSource().clear();
            map.removeLayer(featureOverlay);
        }

        var layer = document.getElementById("selectLayer");
        var attribute = document.getElementById("selectAttribute");
        var operator = document.getElementById("selectOperator");
        var txt = document.getElementById("enterValue");

        if (layer.options.selectedIndex == 0) {
            alert("Select Layer");
        } else if (attribute.options.selectedIndex == -1) {
            alert("Select Attribute");
        } else if (operator.options.selectedIndex <= 0) {
            alert("Select Operator");
        } else if (txt.value.length <= 0) {
            alert("Enter Value");
        } else {
            var value_layer = layer.options[layer.selectedIndex].value;
            var value_attribute = attribute.options[attribute.selectedIndex].text;
            var value_operator = operator.options[operator.selectedIndex].value;
            var value_txt = txt.value;
            if (value_operator == 'Like') {
                value_txt = "%25" + value_txt + "%25";
            }
            else {
                value_txt = value_txt;
            }
            var url = or + "/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + value_layer + "&CQL_FILTER=" + value_attribute + "+" + value_operator + "+'" + value_txt + "'&outputFormat=application/json"
            // console.log(url);
            newaddGeoJsonToMap(url);
            newpopulateQueryTable(url);
            setTimeout(function () { newaddRowHandlers(url); }, 300);
            map.set("isLoading", 'NO');
        }
    }
});

function newaddGeoJsonToMap(url) {

    if (geojson) {
        geojson.getSource().clear();
        map.removeLayer(geojson);
    }

    var style = new ol.style.Style({
        // fill: new ol.style.Fill({
        //   color: 'rgba(0, 255, 255, 0.7)'
        // }),
        stroke: new ol.style.Stroke({
            color: '#FFFF00',
            width: 3
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#FFFF00'
            })
        })
    });

    geojson = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: url,
            format: new ol.format.GeoJSON()
        }),
        style: style,

    });

    geojson.getSource().on('addfeature', function () {
        map.getView().fit(
            geojson.getSource().getExtent(),
            { duration: 1590, size: map.getSize(), maxZoom: 21 }
        );
    });
    map.addLayer(geojson);
};

function newpopulateQueryTable(url) {
    if (typeof attributePanel !== 'undefined') {
        if (attributePanel.parentElement !== null) {
            attributePanel.close();
        }
    }
    $.getJSON(url, function (data) {
        var col = [];
        col.push('id');
        
        for (var i = 0; i < data.features.length; i++) {

            for (var key in data.features[i].properties) {

                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        table.setAttribute("class", "table table-bordered table-hover table-condensed");
        table.setAttribute("id", "attQryTable");
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) 
        //for (var i = 1; i < col.length; i++)
        {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.features.length; i++) 
        //for (var i = 1; i < data.features.length; i++)
        {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) 
            //for (var j = 1; j < col.length; j++)
            {
                var tabCell = tr.insertCell(-1);
                if (j == 0) { tabCell.innerHTML = data.features[i]['id']; }
                else {
                    tabCell.innerHTML = data.features[i].properties[col[j]];
                }
            }
        }

        // var tabDiv = document.createElement("div");
        var tabDiv = document.getElementById('attListDiv');

        var delTab = document.getElementById('attQryTable');
        if (delTab) {
            tabDiv.removeChild(delTab);
        }

        tabDiv.appendChild(table);

        document.getElementById("attListDiv").style.display = "block";


        var $tbl = $("#attQryTable");
    $tbl.find('td:nth-child(1),th:nth-child(1)').hide();
    $tbl.find('td:nth-child(3),th:nth-child(3)').hide();
    });

};

var highlightStyle = new ol.style.Style({
    // fill: new ol.style.Fill({
    //     // color: 'rgba(255,0,255,0.3)',
    //   color: 'rgba(255,0,255,0.8)',
    // }),
    stroke: new ol.style.Stroke({
        color: '#FF00FF',
        width: 3,
    }),
    image: new ol.style.Circle({
        radius: 10,
        fill: new ol.style.Fill({
            color: '#FF00FF'
        })
    })
});


var featureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector(),
    map: map,
    style: highlightStyle
});

function newaddRowHandlers() {
    var table = document.getElementById("attQryTable");
    var rows = document.getElementById("attQryTable").rows;
    var heads = table.getElementsByTagName('th');
    var col_no;
    for (var i = 0; i < heads.length; i++) {
        // Take each cell
        var head = heads[i];
        if (head.innerHTML == 'id') {
        //    if (head.innerHTML == 'Name') {
            col_no = i + 1;
        }

    }
    for (i = 0; i < rows.length; i++) 
    {
        rows[i].onclick = function () {
            return function () {
                featureOverlay.getSource().clear();

                $(function () {
                    $("#attQryTable td").each(function () {
                        $(this).parent("tr").css("background-color", "white");
                    });
                });
                var cell = this.cells[col_no - 1];
                var id = cell.innerHTML;
                $(document).ready(function () {
                    $("#attQryTable td:nth-child(" + col_no + ")").each(function () {
                        if ($(this).text() == id) {
                            $(this).parent("tr").css("background-color", "#d1d8e2");
                        }
                    });
                });

                var features = geojson.getSource().getFeatures();

                for (i = 0; i < features.length; i++) {
                    if (features[i].getId() == id) {
                        featureOverlay.getSource().addFeature(features[i]);

                        featureOverlay.getSource().on('addfeature', function () {
                            map.getView().fit(
                                featureOverlay.getSource().getExtent(),
                                { duration: 1500, size: map.getSize(), maxZoom: 18 }//maxZoom: 24
                            );
                        });

                    }
                }
            };
        }(rows[i]);
    }
}

// end : attribute query
var app = angular.module('xcellenApp', [ 'ui.router','ngSanitize'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'personController'
    })
    .state('homeslider', {
        url: '/home/homeslider',
        templateUrl: 'templates/home.html',
        controller: 'personController'
    })
    .state('consulting', {
        url: '/home/consulting',
        templateUrl: 'templates/home.html',
        controller: 'personController'
    })
    .state('data', {
        url: '/home/data',
        templateUrl: 'templates/home.html',
        controller: 'personController'
    })
    .state('technology', {
        url: '/home/technology',
        templateUrl: 'templates/home.html',
        controller: 'personController'
    })
    .state('joinussection', {
        url: '/whoweare/join-us',
        templateUrl: 'templates/whoweare.html',
        controller: 'wwrController'
    })
    
    .state('whoweare', {
        url: '/who-we-are',
        templateUrl: 'templates/whoweare.html',
        controller: 'wwrController'
    })
    .state('aboutus', {
        url: '/about-us',
        templateUrl: 'templates/aboutus.php',
        controller: 'wwrController'
    })
    .state('wheretofindus', {
        url: '/where-to-find-us',
        templateUrl: 'templates/wheretofindus.html',
        //controller: 'personController'
    });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
});
function wwrController( $scope,$state ){
    console.log('sssd');
    console.log($state.current.name);
    if( $state.current.name == 'joinussection' ){
        $('html, body').animate({scrollTop: $('#joinussection').offset().top}, 200);
    }
}
function personController( $scope, $state ) {
    if( $state.current.name == 'homeslider' ){
        $('html, body').animate({scrollTop: $('#homeslider').offset().top}, 200);
    }
    else
    if( $state.current.name == 'consulting' ){
        $('html, body').animate({scrollTop: $('#portfolio').offset().top}, 200);
    }
    else if( $state.current.name == 'data' ){
        $('html, body').animate({scrollTop: $('#featureOne').offset().top}, 200);
    }
    else if( $state.current.name == 'technology' ){
        $('html, body').animate({scrollTop: $('#featureTwo').offset().top}, 200);
    } 
    else if( $state.current.name == 'joinussection' ){
        $('html, body').animate({scrollTop: $('#joinussection').offset().top}, 200);
    }

    $scope.txtdata = {
        'sfe_screen' : {    'title' : 'SFE SCREENING',
                            'issuetxt' :'Client Questions:<br/><ul><li>How do our current SFE practices compare with best practices?</li><li>Where are the gaps to best practices?</li><li>Where do the low hanging fruits lie?</li><li>Where are the opportunities for improvement? And how can we prioritize them?</li></ul>',
                            'devliverytxt' :'Example of Deliverables:<br/><ul><li>Full project report including approach, inputs, findings, identified issues and recommendations</li><li>Mapping of SFE sub-drivers versus gap to best practice highlighting priorities</li><li>Draft implementation roadmap to reach best practice in SFE</li></ul>',
                            'approachtxt' :'Approach:<br/> <ul><li>Selection of critical SFE drivers and sub-drivers for evaluation</li><li>Diagnosis of your current SFE practices through extensive data analytics, management and sales personnel interviews and shadow field visits</li></ul>'
                        },
        'targetting' : {   'title' : 'TARGETING',
                            'issuetxt' :'Client Questions:<br/> <ul><li>Who and where are the high potential Physicians, Pharmacies and Hospitals?</li>Are our current promotional resources aligned with market potential?<li>How to profile targets in a data poor environment? How to best segment our targets?</li><li>In which regions could our sale force expand coverage to?</li></ul>',
                            'devliverytxt' :'Example of Deliverables:<br/><ul><li>Full project report including approach, inputs, issues identified and segmentation summary</li><li>List of Physicians, Pharmacies and Hospitals with segmentation (national and regional) category and relevant variables</li><li>An extensive set of business insights including review of current targeting process, disruption analysis, detailed before & after analysis and impact on FTEs</li><li>Draft implementation roadmap</li></ul>',
                            'approachtxt' :'Approach:<br/> <ul><li>Assessment of geographical potential based on demographics, sales and market data (where available), and other relevant data</li><li>Profiling through sales force input (under our guidance) and other available internal and external data sources</li><li>Segmentation modeling and allocation of optimal coverage and frequency</li></ul>'
                        },
        'resc-opt' : {      'title' : 'RESOURCE OPTIMIZATION',
                            'issuetxt' :'Client Questions:<br/><ul><li>What is the optimal size of our sales force for effective coverage of our customers? And other commercial roles?</li><li>What is the best structure to promote our current and incoming products?</li><li>How much promotional effort should we assign to each brand?</li><li>How much promotional effort should we assign to each brand?</li><li>Should sales force structure change by geography?</li></ul>',
                            'devliverytxt' :'Example of Deliverables:<br/><ul><li>Full project report including approach, inputs, assumptions, identified issues, analyzed structure options, financials and sizing recommendations</li><li>Draft implementation roadmap</li></ul>',
                            'approachtxt' :'Approach:<br/> <ul><li>Understanding current market dynamics</li><li>Qualitative and quantitative assessment of sales force structure options</li><li>Detailed brand dynamics analysis of promoted portfolio and development of a base case scenario</li><li>Definition of headcount via financial modeling and managerial considerations</li><li>Sales force sizing methodologies include sales response, workload build up and affordable coverage</li></ul>'
                        },                        
        'territory' : {     'title' : 'TERRITORY DESIGN',
                            'issuetxt' :'Client Questions:<br/> <ul><li>How to design territories that provide similar workload and opportunity?</li><li>Where to expand to?</li><li>How to best design territories in a data poor market?</li><li>Which variables should be taken into account?</li><li>How to deal with the geographic inequalities so common in Asia Pacific?</li></ul>',
                            'devliverytxt' :'Example of Deliverables:<br/><ul><li>Full project report including approach, inputs, assumptions, identified issues and territory design recommendation</li><li>An Excel list consisting of mapped territories and soft copies of high definition country, regional and territory maps</li><li>A set of deliverables including before and after analysis, impact on travel time and disruption analysis</li><li>A set of deliverables including before and after analysis, impact on travel time and disruption analysis</li><li>Draft implementation roadmap</li></ul>',
                            'approachtxt' :'Approach:<br/> <ul><li>Diagnosis of current territory design; identification of strengths and weaknesses</li><li>Territory design modeling (using a in-house built mapping software) through selected quantitative variables such as number of physicians, physician</li><li>Territory fine tuning via FLSM input to adjust for soft items like geography, roads and sales rep tenure</li></ul>'
                        },                               
        'sfe-comp' : {      'title' : 'SALES FORCE COMPENSATION',
                            'issuetxt' :'Client Questions:<br/> <ul><li>What would be the best incentive scheme to motivate our sales force?</li><li>How to ensure fair and motivational targets across territories?</li><li>Are we rewarding the right people? Are we truly rewarding for performance? </li><li>How do different brands impact the incentive scheme?</li><li>How to minimize financial risk for the company?</li></ul>',
                            'devliverytxt' :'Example of Deliverables:<br/><ul><li>Full project report including approach, inputs, assumptions, identified issues, simulations and recommendations</li><li>Simulation of impact on variable payout expending</li><li>Draft implementation roadmap</li></ul>',
                            'approachtxt' :'Approach:<br/><ul><li>Diagnosis of current compensation scheme and identification of strengths and weaknesses</li><li>Identification of constrains, local regulations and corporate guidelines</li><li>Identification of options and selection of payout method and components</li><li>Development of goal setting methodology and testing via simulation</li></ul>'
                        }                               
        // 'adhoc' : {         'title' : 'AD HOC SFE',
        //                     'issuetxt' :'Client Questions:<br/>',
        //                     'devliverytxt' :'Example of Deliverables:<br/>',
        //                     'approachtxt' :'Approach:<br/>'
        //                 }                                                      

    }
    $scope.currentsection = 'sfe_screen';
    $scope.txtoption = 'issuetxt';
    $scope.divtext = $scope.txtdata[ $scope.currentsection ][ $scope.txtoption ]; 
    $scope.divtitle = $scope.txtdata[ $scope.currentsection ]['title'];

    $scope.changeID = function( section ) {
        if( $scope.currentsection != section && $('#service-bottom').is(':visible') ){
            $('#service-bottom').slideUp(1000, function(){
                var scope = angular.element($("#our_approch_paragraph")).scope();
                scope.$apply(function(){
                    console.log( scope );
                    scope.currentsection = section;
                    scope.divtext = scope.txtdata[ scope.currentsection ]['issuetxt'];
                    scope.divtitle = scope.txtdata[ scope.currentsection ]['title'];
                })                
            });
            $('#service-bottom').slideDown(1000);
        } else if( $scope.currentsection == section ) {
            $('#service-bottom').slideToggle(1000);
            $scope.currentsection = section;
            $scope.divtext = $scope.txtdata[ $scope.currentsection ]['issuetxt'];
            $scope.divtitle = $scope.txtdata[ $scope.currentsection ]['title'];
        } else {
            $('#service-bottom').slideDown(1000);    
            $scope.currentsection = section;
            $scope.divtext = $scope.txtdata[ $scope.currentsection ]['issuetxt'];
            $scope.divtitle = $scope.txtdata[ $scope.currentsection ]['title'];
        }
        
    }
    $scope.toggletxt = function( flag ) {
        $scope.txtoption = flag;
        $scope.divtext = $scope.txtdata[ $scope.currentsection ][ $scope.txtoption ]; 
        
    };
}
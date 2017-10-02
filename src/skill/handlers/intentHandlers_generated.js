var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"BarbraIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Barbra" )
	},
	"ContinueIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Continue" )
	},
	"CallCopsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Call Cops" )
	},
	"PutOutFireIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Put out fire" )
	},
	"GoWithCopsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Go with cops" )
	},
	"StayHomeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Stay home" )
	},
	"WalkToTheSchoolIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Walk to the School" )
	},
	"CallTowTruckAndWaitInCarIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Call tow truck and wait in car" )
	},
	"StayInCarIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Stay in Car" )
	},
	"DemandToBeLetOutIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Demand to Be Let Out" )
	},
	"ZaraIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Zara" )
	},
	"MichaelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Michael" )
	},
	"JohnnyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Johnny" )
	},
	"StopTheBleedingIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Stop the bleeding" )
	},
	"HelpFightTheKillerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Help fight the killer" )
	},
	"ChetTheJockIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Chet the Jock" )
	},
	"ZaraTheDramaGeekIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Zara the Drama Geek" )
	},
	"MichaelTheCheerleaderIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Michael the Cheerleader" )
	},
	"AliciaTheSchoolPresidentIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Alicia the School President" )
	},
	"JohnnyTheTownieIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Johnny the Townie" )
	},
	"HumanShieldIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Human Shield" )
	},
	"TellHerTheTruthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Tell her the truth" )
	},
	"PunchHerInTheFaceIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Punch Her in the Face" )
	},
	"KillMichaelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Kill Michael" )
	},
	"ThreatenTheKillerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Threaten the Killer" )
	},
	"TrustJohnnyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Trust Johnny" )
	},
	"RunFromJohnnyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Run from Johnny" )
	},
	"GrabFlagIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Grab flag" )
	},
	"HoldOntoHisCloakIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Hold onto his cloak" )
	},
	"MakeOutWithJohnnyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Make Out With Johnny" )
	},
	"ShootKillerInTheHeadIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Shoot Killer in the Head" )
	},
	"YesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Yes" )
	},
	"NoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "No" )
	},
	"TrustZaraIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Trust Zara" )
	},
	"RunIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Run" )
	},
	"LieIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Lie" )
	},
	"TellTheTruthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Tell the Truth" )
	},
	"ConfrontTheKillerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Confront the killer" )
	},
	"LetJohnnyConfrontTheKillerIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Let Johnny confront the killer" )
	},
}
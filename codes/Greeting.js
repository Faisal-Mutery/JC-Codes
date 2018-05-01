module.exports.got = false;
module.exports.get = function ( options ){
	if( this.got == true ) return;
	this.got = true;
	return [ function ( args ){
		var dat = JSON.parse("{}");
                function forEachObject(obj, func) {
                Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
                 }
             var guild;
             while (!guild)
guild = member.guild.find("name", member.guild.name.forEach())
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
		let member = args[0]
		
		if( options == undefined || options.channel == undefined ) return console.error( '[ Error JC-Codes ]: You need to put all arguments correct' );
		let channel = member.guild.channels.get(options.channel);
		if( options.message == undefined ) {
			return channel.send( 'Welcome ' + member + '!' );
		} else {
			var message = options.message.replace('[user]',member).replace('[inviter]',Invite.inviter).replace('[InviteCode]',Invite.code);
    var guild;
    while (!guild)
        guild = client.guilds.find("name", member.guild.name)
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
			return channel.send( message ).catch(console.error);
                }
            dat[Inv] = Invite.uses;
        })
    })
		}
		
	}, "guildMemberAdd" ];
}


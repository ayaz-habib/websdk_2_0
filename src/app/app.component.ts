import { Component, OnInit } from '@angular/core';
import { chatConfig, chatWindow } from 'kore-web-sdk';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kore_websdk';

  ngOnInit(){
    let botOptions=chatConfig.botOptions;
	
    botOptions.JWTUrl = "https://developer.kore.ai/tools/jwt/.io/";
    botOptions.userIdentity = 'ayazhabib9@gmail.com';// Provide users email id here
    botOptions.botInfo = { name: "MyBot", "_id": "st-225c2b16-bac9-56ee-9e49-e95bdb1289d1" }; // bot name is case sensitive
    botOptions.clientId = "cs-142231cf-2b43-5c30-8083-08f581b99f6c";
    botOptions.clientSecret = "6f4Ttvd3UcHUNyiZLGJtIx0AvylfjYWE5PCOF43fwKw=";
    botOptions.allowGoogleSpeech = false,		// set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')

    botOptions.webhookConfig={
      enable:true,
      webhookURL:'https://bots.kore.ai/chatbot/hooks/st-225c2b16-bac9-56ee-9e49-e95bdb1289d1',
      useSDKChannelResponses: false, //Set it to true if you would like to use the responses defined for Web/Mobile SDK Channel
      apiVersion:2 //webhookURL will be converted to v2 by default. To use v1(not recommended) webhookURL change it to 1
    }
    var chatWindowInstance = new chatWindow();
    chatWindowInstance.show(chatConfig);
  }
}

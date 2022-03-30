import { Component, OnInit } from '@angular/core';
import * as keypair from 'keypair';

declare var require: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  this.GeneratePairs();

    // var keypair = require('keypair');
    // var forge = require('node-forge');
    // var keys = forge.pki.rsa.generateKeyPair(2048);
    // var cert = forge.pki.createCertificate();

    // var pair = keypair();
    // var publicKey = forge.pki.publicKeyFromPem(pair.public);
    // var ssh = forge.ssh.publicKeyToOpenSSH(publicKey, 'user@domain.tld');
    // console.log(ssh);
  }


  GeneratePairs() {
    var keypair = require('keypair');
    var pair = keypair();
    console.log("Private and Public Key" ,pair);
  }

}



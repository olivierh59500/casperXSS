test = 'JSESSIONID=82F0B220AC16E85AAFF5A7EF5222DC8D; FC=uaxd9ovb3akvRDWsQElWewkwGgVxtEiiZV^eiUYZT1VSb6ZdKrPj_Of12t40uDKsz6HPxKA8Yw3kwqOQNrAJSTCpBTfzlYsMjlmk_pzoIb9V5yvwXCCInMabYccFtT^WeKvp35K8a6ous1DkxcKcIXzgNB0rrqls7cA^OYAbDHwWAMbw6bBKBX_So8e_SNCT6JaazEF4ViNpfU6a1RTWbwX8ZDzCTJYmpCwxvJtH6tZjUozutz7blrB_SQIwhjHE^J0CZjRFAfI1uGDvAkYyC37xRggqoO0ZU4MLHi977ucaSAJm48G4Tt0NC8m2A^r9kGgkNti0ALjCb72rs7gvnLljCntC0PUhRGQ66gHnocSUeYClEpxoUgQ03; MC=KPP0kWjtW0KJqclPAXkUNqSIcnoSAlRAPLYKI1spIAA56QABqjMGBAAKADIGBVRGql8ABgkAAAABBwoABQUFABMN7kxE_Dp0_xHWiLmsGWlRqncDERYLG2RmLmNoZi5yYQIcAAAAAAAAAyYBAyoBAAAAAAAAQ03; RC=3JZShJXEzXW1sirqqL3ThrVKizti1fVGARajR0zOUv5MlXHyO5ykcdTE3S8EGR8qNUySHXeu_pOkMMSc5xv_nZS3EK7WrSRRYYWPOIkzN954SObNPdE_n84gTxT7SJVWuVJ5Flf3oZ0AN9MBiJFbZzvOyexLZ6ybsItQ5mbvj_iBSZMTVKEV5j3kyWa38Hcsf4t_ePnMFPh^zU2SAsA7d0cwPGxOe6tGPP_ggILvU6QNxCtem5rX5mvRgnhtlvXIcmKuzDUHxN4ZAANv9CBYqNEnNqq5KQEGc84ixz0Z4LicAlr2UfJHMeDatm80tZfQg8E0KSu^1BwE76UggLIc7dD9XtRr1xw7Lgy1FG_xWwZcHSg3q0_LQLQK_BF3D7PmEoSdaHE5M_67^7nvvuAfsPB9_ioZ8y67H^QRZmYHpwn8imuFpnHNE^43Xf2dPbEFZhByXQUM1OijEitHQ3OSgCPiPvxgv8xrDJeIY5PWW2u4XpCxit2LjegSE8jpRED9au4ethOwo8cQ03; SC=XXForqfd5FpcbqUrpRMdtW5R9Llwyb3xcCQesCIXt2smUoSVk9^t_lSVRkEbMtvoa5ilrjA4uwpLYPlys033HBnlQwSg^M4UtnhyMHQ9QjlW4xWNcnzp44fFot88TaGRl8WqbenSY43QYs68kRP^o5K4k9WMX8wTtgHcxJRy6aSCUYM2aw1c1Y4ojGnchuxqSGk92IrSPORyr_Pgk8VIHcbpHgeUfuqyvV4l^aEeWz2dZoawBa4Do__v0qStEJ7_Q03; ATC=M84ouhYUatvQ2qxmlkMisW8de2ZURqpnVEa4d1RGql8'
test = test.split(";")
var count = 1
for (i=0;i<test.length;i++){
	cookie = test[i].trim("")
	if (cookie){
		cookie = cookie.split("=")
		name = cookie[0]
		value = cookie[1]
		console.log(name)
	}
	
	
	
}
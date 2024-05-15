input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    lcd16x2rgb.initRGB(lcd16x2rgb.lcd16x2rgb_eADDR(lcd16x2rgb.eADDR_RGB.RGB_16x2_x30))
    lcd16x2rgb.setRGB(lcd16x2rgb.lcd16x2rgb_eADDR(lcd16x2rgb.eADDR_RGB.RGB_16x2_x30), 8, 8, 8)
})
lcd16x2rgb.initLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E))
dipswitch.setEvent(dipswitch.dipswitch_eADDR(dipswitch.eADDR.DIP_x03))
loops.everyInterval(500, function () {
    dipswitch.readSwitch(dipswitch.dipswitch_eADDR(dipswitch.eADDR.DIP_x03))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 0, 0, 3, dipswitch.getBIN())
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 0, 4, 15, bit.formatNumber(dipswitch.getBIN(), bit.eLength.BIN_11111111))
    basic.showNumber(dipswitch.getNumber())
})

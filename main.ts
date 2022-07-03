PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Tracking)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.lineDirection(PlanetX_AILens.LineTrend.front)) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 45)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, -45)
    } else if (PlanetX_AILens.lineDirection(PlanetX_AILens.LineTrend.right)) {
        neZha.setServoSpeed(neZha.ServoList.S1, 34)
        neZha.setServoSpeed(neZha.ServoList.S4, 10)
    } else {
        neZha.setServoSpeed(neZha.ServoList.S1, 30)
        neZha.setServoSpeed(neZha.ServoList.S4, -30)
    }
})

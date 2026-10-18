package VRMS.vehilcle_rental_management_system.controller;

import VRMS.vehilcle_rental_management_system.entity.Vehicle;
import VRMS.vehilcle_rental_management_system.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vehicle")
public class VehicleController {
    @Autowired
    VehicleService vehicleService;

    @PostMapping("/save")
    public Vehicle saveVehicle(@RequestBody Vehicle v){
        return vehicleService.saveVehicle(v);
    }
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteVehicle(@RequestParam String r_id){
        return vehicleService.removeVehicle(r_id);
    }
    @PutMapping("/edit/charge")
    public Vehicle editCharge(@RequestParam String v_id,@RequestParam int p){
        return vehicleService.editCharge(v_id,p);
    }
}

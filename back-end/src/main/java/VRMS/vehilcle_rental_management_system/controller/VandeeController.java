package VRMS.vehilcle_rental_management_system.controller;

import VRMS.vehilcle_rental_management_system.entity.Vandee;
import VRMS.vehilcle_rental_management_system.service.VandeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vandee")
public class VandeeController{
    @Autowired
    VandeeService vandeeService;

    @PostMapping("/save")
    public Vandee addVandee(@RequestBody Vandee v){
        return vandeeService.saveVandee(v);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> removeVandee(@RequestParam Long v_id){
        return vandeeService.deleteVandee(v_id);
    }
}

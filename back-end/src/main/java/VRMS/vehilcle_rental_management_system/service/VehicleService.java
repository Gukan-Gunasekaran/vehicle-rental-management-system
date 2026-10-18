package VRMS.vehilcle_rental_management_system.service;

import VRMS.vehilcle_rental_management_system.Repository.VehicleRepo;
import VRMS.vehilcle_rental_management_system.entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
    @Autowired
    VehicleRepo vehicleRepo;

    public Vehicle saveVehicle(Vehicle v){
        return vehicleRepo.save(v);
    }

    public ResponseEntity<?> removeVehicle(String r_id) {
        vehicleRepo.deleteById(r_id);
        return ResponseEntity.ok("Vehicle deleted successfully");
    }

    public Vehicle editCharge(String r_id,int c){
        Vehicle v=vehicleRepo.findById(r_id)
                .orElseThrow(()->new RuntimeException("vehicle not found"));
        v.setH_charge(c);
        return vehicleRepo.save(v);
    }
}

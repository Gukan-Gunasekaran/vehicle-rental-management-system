package VRMS.vehilcle_rental_management_system.service;

import VRMS.vehilcle_rental_management_system.Repository.VandeeRepo;
import VRMS.vehilcle_rental_management_system.entity.Vandee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class VandeeService {
    @Autowired
    VandeeRepo vandeeRepo;

    public Vandee saveVandee(Vandee v){
        return vandeeRepo.save(v);
    }

    public ResponseEntity<?> deleteVandee(Long v_id){
        vandeeRepo.deleteById(v_id);
        return  ResponseEntity.ok("Account deleted successfully");
    }
}

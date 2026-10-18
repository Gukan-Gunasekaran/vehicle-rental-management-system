package VRMS.vehilcle_rental_management_system.Repository;

import VRMS.vehilcle_rental_management_system.entity.Vandee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VandeeRepo extends JpaRepository<Vandee, Long> {
}

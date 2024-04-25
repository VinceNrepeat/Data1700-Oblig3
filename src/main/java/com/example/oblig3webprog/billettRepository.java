package com.example.oblig3webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class billettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBestilling(Bestilling bestilling){
        String sql = "INSERT INTO Bestilling (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,bestilling.getFilm(),bestilling.getAntall(), bestilling.getFornavn(),
                bestilling.getEtternavn(),bestilling.getTelefonnr(), bestilling.getEpost());
    }

    public List<Bestilling> hentBestilling(){
        String sql = "SELECT * FROM Bestilling ORDER BY etternavn";
        List<Bestilling> bestillingListe =
                db.query(sql, new BeanPropertyRowMapper(Bestilling.class));
        return bestillingListe;
    }

    public void slettAlleBestillinger () {
        String sql = "DELETE FROM Bestilling";
        db.update(sql);
    }


    public Bestilling hentEnBestilling(int id) {
        String sql = "SELECT * FROM Bestilling WHERE id=?";
        Bestilling enBestilling = db.queryForObject(sql,
                BeanPropertyRowMapper.newInstance(Bestilling.class),id);
        return enBestilling;
    }

    public void endreBestilling(Bestilling bestilling){
        String sql = "UPDATE Bestilling SET film=?, antall=?, fornavn=?, etternavn=?, telefonnr=?, epost=? WHERE id=?";
        db.update(sql,bestilling.getFilm(),bestilling.getAntall(), bestilling.getFornavn(),
                bestilling.getEtternavn(),bestilling.getTelefonnr(), bestilling.getEpost(), bestilling.getId());
    }

    public void slettEnBestilling(int id){
        String sql = "DELETE FROM Bestilling WHERE id=?;";
        db.update(sql, id);
    }

}

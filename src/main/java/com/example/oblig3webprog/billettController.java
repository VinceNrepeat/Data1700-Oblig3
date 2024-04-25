package com.example.oblig3webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;

@RestController

public class billettController {
    @Autowired
    billettRepository rep;

    @PostMapping("/lagre")
    public void lagreKunde(Bestilling nyBestilling){rep.lagreBestilling(nyBestilling);}

    @GetMapping("/hentAlle")
    public List<Bestilling> hentAlle(){
        return rep.hentBestilling();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBestillinger();
    }

    @GetMapping("/hentEnBestilling")
    public Bestilling hentEnBestilling(int id){
        return rep.hentEnBestilling(id);
    }

    @PostMapping("/endreBestilling")
    public void endre(Bestilling bestilling){
        rep.endreBestilling(bestilling);
    }

    @GetMapping("/slettEnBestilling")
    public void slettEnBestilling(int id){
        rep.slettEnBestilling(id);
    }

}


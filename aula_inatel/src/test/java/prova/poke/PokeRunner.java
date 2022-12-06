package prova.poke;

import com.intuit.karate.junit5.Karate;

public class PokeRunner {

    @Karate.Test
    Karate testPoke() {
        return Karate.run("poke").relativeTo(getClass());
    }
}

package prova.gorest;

import com.intuit.karate.junit5.Karate;

public class GorestRunner {
    @Karate.Test
    Karate testgorest() {
        return Karate.run("gorest").relativeTo(getClass());
    }
}

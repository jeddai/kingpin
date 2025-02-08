package com.nashvillerollerderby.scoreboard.core.interfaces;

import java.util.ArrayList;
import java.util.Collection;

import com.nashvillerollerderby.scoreboard.event.Child;
import com.nashvillerollerderby.scoreboard.event.Property;
import com.nashvillerollerderby.scoreboard.event.ScoreBoardEventProvider;
import com.nashvillerollerderby.scoreboard.utils.ValWithId;

// Roster for teams for loading in for games.
public interface PreparedTeam extends ScoreBoardEventProvider {

    public static Collection<Property<?>> props = new ArrayList<>();

    public static final Child<ValWithId> UNIFORM_COLOR = new Child<>(ValWithId.class, "UniformColor", props);
    public static final Child<PreparedSkater> SKATER = new Child<>(PreparedSkater.class, "Skater", props);

    public static interface PreparedSkater extends ScoreBoardEventProvider {}
}

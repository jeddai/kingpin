package com.nashvillerollerderby.scoreboard.event;

public interface SelfRemovingScoreBoardListener extends ScoreBoardListener {
    public void delete();
}

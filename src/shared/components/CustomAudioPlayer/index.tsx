import React, { useRef, useState } from "react";
import PlayButton from "assets/icons/play-button.svg?react";
import PauseButton from "assets/icons/pause-button.svg?react";

import s from "./styles.module.scss";

type CustomAudioPlayerProps = {
    src: string | undefined;
};

export const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({
    src,
}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const percent =
                (audioRef.current.currentTime / audioRef.current.duration) *
                100;
            setProgress(percent);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime =
                (parseFloat(e.target.value) / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
        }
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    };

    if (!src) {
        return null;
    }

    return (
        <div className={s["audio-player"]}>
            <button className={s["play-button"]} onClick={togglePlay}>
                {isPlaying ? <PauseButton /> : <PlayButton />}
            </button>
            <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className={s["progress-bar"]}
                style={{
                    background: `linear-gradient(to right, #333 ${progress}%, #ccc ${progress}%)`,
                }}
            />
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleAudioEnded}
                preload="auto"
            />
        </div>
    );
};

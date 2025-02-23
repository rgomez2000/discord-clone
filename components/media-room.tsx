"use client";

import { useEffect, useState } from "react";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

interface MediaRoomProps {
    chatId: string;
    video: boolean;
    audio: boolean;
};


export const MediaRoom = ({
    chatId,
    video,
    audio
}: MediaRoomProps) => {
    console.log("MediaRoom component rendering");
    const { user } = useUser();
    const [token, setToken] = useState("");
    useEffect(() => {

        (async () => {
            try {
                // @ts-ignore
                const resp = await fetch(`/api/livekit?room=${chatId}&username=${user.firstName} ${user.lastName}`);
                const data = await resp.json();
                setToken(data.token);
            } catch (e) {
                console.log(e);
            }
        })();
        console.log("Fetching token for room:", chatId);
    }, [user?.firstName, user?.lastName, chatId]);

    if (token === "") {
        return (
            <div className="flex flex-col flex-1 justify-center items-center">
                <Loader2 
                    className="h-7 w-7 text-zinc-500 animate-spin my-4"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <LiveKitRoom
            video={video}
            audio={audio}
            token={token}
            data-lk-theme="default"
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
            connect={true}
        >
            <VideoConference />
        </LiveKitRoom>
    );
}
import React from "react";

import  Skeleton  from "@/components/skeleton";
import styles from "./styles.module.css";

function MoviesSectionLoading() {
    return (
        <div className={styles.movieSection}>
            <Skeleton width={180} height={36} />
            <div className={styles.movies}>
                {Array(10)
                    .fill(null)
                    .map((_, index) => (
                        <Skeleton key={index} />
                    ))}
            </div>
        </div>
    );
}

export default MoviesSectionLoading ;
import React from "react";

import { Skeleton } from "@/components/skeleton";
import styles from "./styles.module.css";

function MoviesSectionLoading() {
    return (
        <div className={styles.movieSection}>
            <Skeleton width={128} height={36} />
            <div className={styles.movie}>
                {Array(5)
                    .fill(null)
                    .map((_, index) => (
                        <Skeleton key={index} />
                    ))}
            </div>
        </div>
    );
}

export { MoviesSectionLoading };
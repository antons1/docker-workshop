(ns docker-workshop.db
  (:require [monger.core :as mg]
            [monger.collection :as mc]))

(defonce connection (atom nil))
(defonce db (atom nil))

(defn connect []
  (reset! connection (mg/connect {:host "ws-db"}))
  (reset! db (mg/get-db @connection "default")))

(defn disconnect []
  (mg/disconnect @connection)
  (reset! connection nil))

(defn write-kitten [kitten]
  (mc/insert @db "kittens" (assoc kitten :_id (:id kitten))))

(defn get-kitten [id]
  (-> (mc/find-map-by-id @db "kittens" id)
      (dissoc :_id)))

(defn delete-kitten [id]
  (mc/remove-by-id @db "kittens" id))

(defn get-kittens []
  (let [kittens (mc/find-maps @db "kittens")]
    (if (empty? kittens) []
                         (map #(dissoc % :_id) kittens))))

(comment
  (write-kitten {:id "abc-def" :url "something" :comment "something"})
  (get-kitten "abc-def")
  (get-kittens)
  (delete-kitten "abc-def"))
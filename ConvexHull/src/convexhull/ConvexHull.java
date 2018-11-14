/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package convexhull;

import java.util.ArrayList;
import java.util.Random;
import javafx.application.Application;
import javafx.geometry.Point2D;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Line;
import javafx.stage.Stage;

/**
 *
 * @author Andrei Golovkin
 */
public class ConvexHull extends Application {
    
    @Override
    public void start(Stage primaryStage) {
        Random rand = new Random();
        
        System.out.println("Points initialization...");
        Circle[] points = new Circle[20];
        
        for(int n = 0; n < points.length; n++){
            points[n] = new Circle(3+rand.nextInt(800-6), 3+rand.nextInt(600-6), 3);
        }
        
        System.out.println("Lines initialization...");
        ArrayList<Line> lines = new ArrayList<>();
        Circle currentPoint = points[0];
        
        for(Circle n : points){
            if(n.getCenterY() < currentPoint.getCenterY()){
                currentPoint = n;
            }
        }
        currentPoint.setFill(Color.RED);
        Circle startPoint = currentPoint;
        
        Circle next = new Circle(0, 0, 0);
        double angle = 360;
        for(Circle n : points){
            if(n != currentPoint){
                Point2D aim = new Point2D(n.getCenterX(), n.getCenterY()).subtract(currentPoint.getCenterX(), currentPoint.getCenterY()).normalize();
                if(angle > calcAngle(aim.getX(), aim.getY())){
                    angle = calcAngle(aim.getX(), aim.getY());
                    next = n;
                }
            }
        }
        
        lines.add(new Line(currentPoint.getCenterX(), currentPoint.getCenterY(), next.getCenterX(), next.getCenterY()));
        
        double angleOfset = angle;
        currentPoint = next;
        
        while(currentPoint != startPoint){
            next = new Circle(10, 10, 0);
            angle = 360;
            for(Circle n : points){
                if(n != currentPoint){
                    Point2D aim = new Point2D(n.getCenterX(), n.getCenterY()).subtract(currentPoint.getCenterX(), currentPoint.getCenterY()).normalize();
                    double a = calcAngle(aim.getX(), aim.getY());
                    if(a > angleOfset && angle > a){
                        angle = calcAngle(aim.getX(), aim.getY());
                        next = n;
                    }
                }
            }
            
            lines.add(new Line(currentPoint.getCenterX(), currentPoint.getCenterY(), next.getCenterX(), next.getCenterY()));
        
            angleOfset = angle;
            if(angleOfset > 360){
                angleOfset -= 360;
            }
            currentPoint.setFill(Color.ORANGE);
            currentPoint = next;
            
        }
        //Point2D vel = new Point2D(thisGame.getPlayer().getNode().getTranslateX()+10, thisGame.getPlayer().getNode().getTranslateY()+10).subtract(view.getTranslateX(), view.getTranslateY()).normalize().multiply(velScale);
        
        //double s = calcAngle(5, 5);
        
        System.out.println("Window initialization...");
        Pane root = new Pane();
        root.getChildren().addAll(lines);
        for(Circle n : points){
            root.getChildren().add(n);
        }
        
        Scene scene = new Scene(root, 800, 600);
        
        primaryStage.setTitle("Hello World!");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    
    public double calcAngle(double velX, double velY){
        double angle = new Point2D(velX, velY).angle(1, 0);
        if(velY < 0){
            angle = 360 - angle;
        }
        return angle;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}